<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JobPosition;

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
            'location',
            'company_id' => $request->company_id,
            'salary_range' => $request->salary_range,
            'seniority' => $request->seniority,
            'responsibilities' => $request->responsibilities,
            'expectations' => $request->expectations,
            'nice_to_have' => $request->nice_to_have,
            'benefits' => $request->benefits,
        ]);

        return response()->json($new_position);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $position = JobPosition::find($id)->get();
        return response()->json($position->toArray());
    }

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
