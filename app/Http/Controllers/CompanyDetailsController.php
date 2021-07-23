<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;

class CompanyDetailsController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
 
    public function update_user(Request $request) {
      $user = User::find($request->id);

      if($user) {
        foreach($request->toArray() as $key => $value) {
          if($user->$key !== $value && $key !== "id") {
            $user->$key = $value ?? '';
          }
        }

        $user->save();
      }
      
      return response()->json($user->toArray());
    }
}
