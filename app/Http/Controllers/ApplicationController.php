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

  // applications list

  public function show_by_company(Request $request, $company_id) {
    return response()->json($request);
  }

  /**
   * Creates the application
    *
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
    * @param  integer  $company_id
   */
  public function create(Request $request, $company_id) {
    $request->validate([
      'name' => 'required',
      'email' => 'required',
      'number' => 'required',
      'resume' => 'required|mimes:pdf|max:2048'
    ]);

    // additional_questions
    foreach($request->toArray() as $key => $value) {
      if (!in_array($key, ["_token", "name", "email", "number", "resume"])) {
        $additional_questions[$key] = $value;
      }
    }

    $new_application = Application::create([
      'company_id' => intval($company_id),
      'name' => $request->name,
      'email' => $request->email,
      'number' => $request->number,
      'additional_questions' => $additional_questions
    ]);

    Storage::putFileAs('resumes', new File($request->resume), $new_application->id.'.pdf');
    return response()->json($new_application);
  }
}