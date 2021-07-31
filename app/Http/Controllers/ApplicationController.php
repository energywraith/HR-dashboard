<?php namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\File;
use App\Models\JobPosition;
use App\Models\User;
use App\Models\Application;

class ApplicationController extends Controller {

  /**
   * Show the form for sending the application
   * 
   * @param  string  $hash_url
   * @return \Illuminate\Http\Response
   */
  public function index($hash_url) {
      $position = JobPosition::where('hash_url', $hash_url)->first();

      if(!$position) return view('welcome');

      $company = User::where('id', $position->company_id)->first();

      return view('applicationForm', [
          'position' => $position,
          'company_id' => $company->id,
          'form_fields' => $company->application_form
      ]);
  }

  /**
   * Return application that were sent to a company
   * 
   * @param  string  $id
   * @return \Illuminate\Http\Response
   */
  public function show_by_company($id) {
    $applications = Application::where('company_id', $id)->get();

    return response()->json($applications);
  }

  /**
   * Creates the application
    *
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
   */
  public function create(Request $request) {
    $request->validate([
      'name' => 'required',
      'email' => 'required|email',
      'number' => 'required|numeric',
      'resume' => 'required|mimes:pdf|max:2048'
    ]);

    // additional_questions
    $additional_questions = [];
    foreach($request->toArray() as $key => $value) {
      if (!in_array($key, ["_token", "position", "name", "email", "number", "resume"])) {
        $additional_questions[$key] = $value;
      }
    }

    $new_application = Application::create([
      'company_id' => intval(json_decode($request->position)->company_id),
      'position_id' => json_decode($request->position)->id,
      'name' => $request->name,
      'email' => $request->email,
      'number' => $request->number,
      'additional_questions' => $additional_questions
    ]);

    Storage::putFileAs('resumes', new File($request->resume), $new_application->id.'.pdf');
    // return response()->json($new_application);
    return view("success", ['position' => json_decode($request->position)->name]);
  }
}