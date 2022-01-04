<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Backend\UserController;
use App\Http\Controllers\Backend\CompanyController;

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
    Route::get('users', [UserController::class, 'index']);


    //------------------------------- User  Login Register ,  Logout--------------------------\\
    //------------------------------------------------------------------\\
    Route::post('user-register', [AuthController::class, 'register']);
    Route::post('user-login', [AuthController::class, 'login']);

    //------------------------------- User  Logout --------------------------\\
    //------------------------------------------------------------------\\
    Route::middleware('auth:sanctum')->get('user', function (Request $request) {
        return $request->user();
    });

    Route::middleware('auth:sanctum')->group(function () {
        Route::post('logout', [AuthController::class, 'logout']);
        Route::get('profile', [AuthController::class, 'profile']);
    });


    //------------------------------- Company Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::get('companies', [CompanyController::class, 'index']);
    Route::post('add-company', [CompanyController::class, 'store']);
    Route::post('edit-company', [CompanyController::class, 'edit']);
    Route::post('update-company', [CompanyController::class, 'update']);

