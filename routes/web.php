<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// For the authentication on react app with Sanctum
Route::post('/tokens/create', function (Request $request) {
    $token = $request->user()->createToken($request->token_name);

    return ['token' => $token->plainTextToken];
});

// React App Dashboard
Route::get('/dashboard/{path?}', [App\Http\Controllers\HomeController::class, 'index'])->name('dashboard');

// Application form
Route::get('/{hash_url}', [
    App\Http\Controllers\JobPositionsController::class,
    'applicationForm'
]);

// Landing Page
Route::get('/{path?}', function () {
    return view('welcome');
});

Auth::routes();
