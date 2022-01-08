<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Backend\UserController;
use App\Http\Controllers\Backend\CompanyController;
use App\Http\Controllers\Backend\DistrictController;
use App\Http\Controllers\Backend\AgentController;
use App\Http\Controllers\Backend\PassengerController;
use App\Http\Controllers\Backend\SectorController;

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


    //------------------------------- User  Login Register ,  Logout--------------------------\\
    //------------------------------------------------------------------\\
    Route::post('user-register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);

    //------------------------------- User  Logout --------------------------\\
    //------------------------------------------------------------------\\
    Route::middleware('auth:sanctum')->get('user', function (Request $request) {
        return $request->user();
    });

    Route::middleware('auth:sanctum')->group(function () {
        Route::get('logout', [AuthController::class, 'logout']);
        Route::get('profile', [AuthController::class, 'profile']);
    });


    //------------------------------- User Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::get('users', [UserController::class, 'index']);
    Route::post('add-user', [UserController::class, 'store']);
    Route::get('edit-user/{id}', [UserController::class, 'edit']);
    Route::post('update-user/{id}', [UserController::class, 'update']);
    Route::post('delete-user/{id}', [UserController::class, 'destroy']);


    //------------------------------- Company Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::get('companies', [CompanyController::class, 'index']);
    Route::post('add-company', [CompanyController::class, 'store']);
    Route::get('edit-company/{id}', [CompanyController::class, 'edit']);
    Route::post('update-company/{id}', [CompanyController::class, 'update']);
    Route::post('delete-company/{id}', [CompanyController::class, 'destroy']);


    //------------------------------- District Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::get('districts', [DistrictController::class, 'index']);
    Route::post('add-district', [DistrictController::class, 'store']);
    Route::get('edit-district/{id}', [DistrictController::class, 'edit']);
    Route::post('update-district/{id}', [DistrictController::class, 'update']);
    Route::post('delete-district/{id}', [DistrictController::class, 'destroy']);


    //------------------------------- Agent Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::get('agents', [AgentController::class, 'index']);
    Route::post('add-agent', [AgentController::class, 'store']);
    Route::get('edit-agent/{id}', [AgentController::class, 'edit']);
    Route::post('update-agent/{id}', [AgentController::class, 'update']);
    Route::post('delete-agent/{id}', [AgentController::class, 'destroy']);



    //------------------------------- Passenger Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::get('passengers', [PassengerController::class, 'index']);
    Route::post('add-passenger', [PassengerController::class, 'store']);
    Route::get('edit-passenger/{id}', [PassengerController::class, 'edit']);
    Route::post('update-passenger/{id}', [PassengerController::class, 'update']);
    Route::post('delete-passenger/{id}', [PassengerController::class, 'destroy']);


    //------------------------------- Passenger Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::get('sectors', [SectorController::class, 'index']);
    Route::post('add-Sector', [SectorController::class, 'store']);
    Route::get('edit-Sector/{id}', [SectorController::class, 'edit']);
    Route::post('update-Sector/{id}', [SectorController::class, 'update']);
    Route::post('delete-Sector/{id}', [SectorController::class, 'destroy']);
