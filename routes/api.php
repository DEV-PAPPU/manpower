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
use App\Http\Controllers\Backend\RequisitionController;
use App\Http\Controllers\Backend\MofaInformationController;
use App\Http\Controllers\Backend\PasssengerFileController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
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


    //------------------------------- Sector Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::get('sectors', [SectorController::class, 'index']);
    Route::post('add-sector', [SectorController::class, 'store']);
    Route::get('edit-Sector/{id}', [SectorController::class, 'edit']);
    Route::post('update-sector/{id}', [SectorController::class, 'update']);
    Route::post('delete-sector/{id}', [SectorController::class, 'destroy']);


    //------------------------------- Requisitions Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::get('requisitions', [RequisitionController::class, 'index']);
    Route::post('add-requisition', [RequisitionController::class, 'store']);
    Route::get('edit-requisition/{id}', [RequisitionController::class, 'edit']);
    Route::post('update-requisition/{id}', [RequisitionController::class, 'update']);
    Route::post('delete-requisition/{id}', [RequisitionController::class, 'destroy']);
    Route::get('requisition/visa-info/{id}', [RequisitionController::class, 'requisition_visa_info']);
    Route::get('requisition/visa-trade/{id}', [RequisitionController::class, 'requisition_visa_trade']);



    //------------------------------- MofaInformation Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::get('mofaInformations', [MofaInformationController::class, 'index']);
    Route::post('add-mofaInformation', [MofaInformationController::class, 'store']);
    Route::get('edit-mofaInformation/{id}', [MofaInformationController::class, 'edit']);
    Route::post('update-mofaInformation/{id}', [MofaInformationController::class, 'update']);
    Route::post('delete-mofaInformation/{id}', [MofaInformationController::class, 'destroy']);
    Route::get('visa-trades', [MofaInformationController::class, 'trade_data']);


    //------------------------------- [PasssengerFile Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::get('passenger-image/{id}', [PasssengerFileController::class, 'images']);
    Route::post('passenger-image', [PasssengerFileController::class, 'store']);


    Route::post('testapi', function () {
        return 'working';
    });
