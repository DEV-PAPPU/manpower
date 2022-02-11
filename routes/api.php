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
use App\Http\Controllers\Backend\SMTController;
use App\Http\Controllers\Backend\ManPowerManageController;
use App\Http\Controllers\Backend\PassengerStatusManagement;
use App\Http\Controllers\Backend\TKTController;
use App\Http\Controllers\Backend\InterviewController;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\DataSearchController;
use App\Http\Controllers\Backend\CountryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
*/

    //------------------------------- DashboardController--------------------------\\
    //------------------------------------------------------------------\\
    Route::get('dashboard-status', [DashboardController::class, 'dashboard_status']);


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
    Route::post('/add-agent', [AgentController::class, 'store']);
    Route::get('edit-agent/{id}', [AgentController::class, 'edit']);
    Route::post('update-agent/{id}', [AgentController::class, 'update']);
    Route::post('delete-agent/{id}', [AgentController::class, 'destroy']);
    Route::post('delete-agent-image/{id}', [AgentController::class, 'agent_image_destroy']);



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
    Route::get('search-sector/{name}', [SectorController::class, 'search_sector']);


    //------------------------------- Requisitions Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::get('requisitions', [RequisitionController::class, 'index']);
    Route::post('add-requisition', [RequisitionController::class, 'store']);
    Route::get('edit-requisition/{id}', [RequisitionController::class, 'edit']);
    Route::post('update-requisition/{id}', [RequisitionController::class, 'update']);
    Route::post('delete-requisition/{id}', [RequisitionController::class, 'destroy']);
    Route::get('requisition/visa-info/{id}', [RequisitionController::class, 'requisition_visa_info']);
    Route::get('requisition/visa-trade/{id}', [RequisitionController::class, 'requisition_visa_trade']);
    Route::get('requisition-company-sectors/{id}', [RequisitionController::class, 'requisition_sectors']);
    Route::get('requisitions-list-by-company/{id}', [RequisitionController::class, 'requisition_list_by_company_id']);


    //------------------------------- MofaInformation Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::get('mofaInformations', [MofaInformationController::class, 'index']);
    Route::post('add-mofaInformation', [MofaInformationController::class, 'store']);
    Route::get('edit-mofaInformation/{id}', [MofaInformationController::class, 'edit']);
    Route::post('update-mofaInformation/{id}', [MofaInformationController::class, 'update']);
    Route::post('delete-mofaInformation/{id}', [MofaInformationController::class, 'destroy']);
    Route::get('visa-trades', [MofaInformationController::class, 'trade_data']);


    //------------------------------- SMT Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::get('passenger-image/{id}', [PasssengerFileController::class, 'images']);
    Route::post('passenger-image', [PasssengerFileController::class, 'store']);


    //------------------------------- Search Passport Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::post('search-passport', [SMTController::class, 'search_passport']);
    Route::get('stm-lists', [SMTController::class, 'index']);
    Route::post('add-stm-passport', [SMTController::class, 'store']);
    Route::get('stm-passports/{id}', [SMTController::class, 'stm_passports']);
    Route::post('change-passport-status', [SMTController::class, 'change_passport_status']);



     //------------------------------- ManPowerManage Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::post('manpower-search-passport', [ManPowerManageController::class, 'search_passport']);
    Route::get('manpower-lists', [ManPowerManageController::class, 'index']);
    Route::post('add-manpower-passport', [ManPowerManageController::class, 'store']);
    Route::get('manpower-passports/{id}', [ManPowerManageController::class, 'manpower_passports']);
    Route::post('manpower-change-passport-status', [ManPowerManageController::class, 'change_passport_status']);


    
     //------------------------------- TKT Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::prefix('tkt')->group(function () {
        Route::post('/search-passport', [TKTController::class, 'search_passport']);
        Route::get('/lists', [TKTController::class, 'index']);
        Route::post('/add-passport', [TKTController::class, 'store']);
        Route::get('/passports/{id}', [TKTController::class, 'Tkt_passports']);
        Route::post('/change-passport-status', [TKTController::class, 'change_passport_status']);
    });



     //------------------------------- Interview Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::prefix('interview')->group(function () {
        Route::post('/search-passenger', [InterviewController::class, 'search_passenger']);
        Route::get('/lists', [InterviewController::class, 'index']);
        Route::post('/edit', [InterviewController::class, 'edit']);
        Route::post('/update', [InterviewController::class, 'update']);
        Route::post('/add', [InterviewController::class, 'store']);
        Route::post('/change-fly-status/{id}', [InterviewController::class, 'change_fly_status']);
    });
    

     //------------------------------- DataSearchController Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::post('trade-search-by-company', [DataSearchController::class, 'search_trade_by_company']);
    Route::post('/search-passenger', [DataSearchController::class, 'search_passenger']);
    Route::get('search-sector-by-company/{id}', [DataSearchController::class, 'search_sector_by_company']);

    
    
     //------------------------------- PassengerStatusManagement Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::get('passenger-status', [PassengerStatusManagement::class, 'index']);



     //------------------------------- Country Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::get('country', [CountryController::class, 'index']);
    Route::post('add-country', [CountryController::class, 'store']);
    Route::get('edit-country/{id}', [CountryController::class, 'edit']);
    Route::post('update-country/{id}', [CountryController::class, 'update']);
    Route::post('delete-country/{id}', [CountryController::class, 'destroy']);
    Route::get('country-sectors/{id}', [CountryController::class, 'country_sectors']);
    Route::post('delete-country-sector/{id}', [CountryController::class, 'destroy_country_sector']);


