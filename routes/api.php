<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Get user data
Route::get('/user', function (Request $request) {
    $user = $request->user();

    if ($user) {
        return $request->user();
    } else {
        return null;
    }
});

// Update user data
Route::middleware('auth:sanctum')->post('/change_company_details', [
    App\Http\Controllers\CompanyDetailsController::class,
    'update_user'
]);

// Get position data by hash_url
Route::middleware('auth:sanctum')->get('/position/{hash_url}', [
    App\Http\Controllers\JobPositionsController::class,
    'show_by_hash_url'
]);

// Show positions posted by a company
Route::middleware('auth:sanctum')->get('/positions/{company_id}', [
    App\Http\Controllers\JobPositionsController::class,
    'show_by_company'
]);

// Create a job position
Route::middleware('auth:sanctum')->post('/position', [
    App\Http\Controllers\JobPositionsController::class,
    'store'
]);

// Delete a job position
Route::middleware('auth:sanctum')->post('/position/delete/{id}', [
    App\Http\Controllers\JobPositionsController::class,
    'destroy'
]);

// Get applications for company
Route::middleware('auth:sanctum')->get('/applications/{id}', [
    App\Http\Controllers\ApplicationController::class,
    'show_by_company'
]);

// Get resume
Route::middleware('auth:sanctum')->get('/resume/{id}', [
    App\Http\Controllers\ResumesController::class,
    'view'
]);