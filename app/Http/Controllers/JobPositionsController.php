<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JobPosition;
use App\Models\User;
use Illuminate\Support\Str;

class JobPositionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $positions = JobPosition::all();
        // return response()->json($positions->toArray());
    }

    /**
     * Show the form for sending the application
     *
     * @return \Illuminate\Http\Response
     */

    public function applicationForm($hash_url)
    {
        $position = JobPosition::where('hash_url', $hash_url)->first();

        if(!$position) return view('welcome');

        $form_fields = User::where('id', $position->company_id)->first();

        return view('applicationForm', [
            'position' => $position,
            'form_fields' => $form_fields->application_form
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'company_id' => 'required',
            'salary_range' => 'nullable',
            'seniority' => 'required',
        ]);

        $new_position = JobPosition::create([
            'name' => $request->name,
            'description' => $request->description,
            'location' => $request->location,
            'company_id' => $request->company_id,
            'salary_range' => $request->salary_range,
            'seniority' => $request->seniority,
            'responsibilities' => $request->responsibilities,
            'expectations' => $request->expectations,
            'nice_to_have' => $request->nice_to_have,
            'benefits' => $request->benefits,
            'hash_url' => Str::random(9)
        ]);

        return response()->json($new_position);
    }

    // private function rand_string ()

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // public function show($id)
    // {
    //     $position = JobPosition::find($id)->get();
    //     return response()->json($position->toArray());
    // }

    /**
     * Display the resources for company
     *
     * @param  int  $company_id
     * @return \Illuminate\Http\Response
     */
    public function show_by_company($company_id)
    {
        $positions = JobPosition::where('company_id', $company_id)->get();
        return response()->json($positions->toArray());
    }

    /**
     * Display the resource for hash_url
     *
     * @param  int  $hash_url
     * @return \Illuminate\Http\Response
     */
    public function show_by_hash_url($hash_url)
    {
        $position = JobPosition::where('hash_url', $hash_url)->get();

        if(!$position) {
            return null;
        }

        return response()->json($position->toArray());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $position = JobPosition::find($id);
        $position->delete();
        return response()->json($position->toArray());
    }
}
