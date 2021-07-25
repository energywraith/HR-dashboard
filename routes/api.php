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

// Get position data
Route::get('/position/{id}', [
    App\Http\Controllers\JobPositionsController::class,
    'show'
]);

// Get user data
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Update user data
Route::middleware('auth:sanctum')->post('/change_company_details', [
    App\Http\Controllers\CompanyDetailsController::class,
    'update_user'
]);

// Create a job position
Route::middleware('auth:sanctum')->post('/position', [
    App\Http\Controllers\JobPositionsController::class,
    'store'
]);

// Show positions posted by a company
Route::middleware('auth:sanctum')->get('/positions/{company_id}', [
    App\Http\Controllers\JobPositionsController::class,
    'show_by_company'
]);