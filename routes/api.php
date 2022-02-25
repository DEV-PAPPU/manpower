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
use App\Http\Controllers\Account\BranchController;
use App\Http\Controllers\Account\BankController;
use App\Http\Controllers\Account\PaymentController;
use App\Http\Controllers\Report\STMReportController;

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

    //------------------------------- Agent Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::get('agents', [AgentController::class, 'index']);
    Route::post('/add-agent', [AgentController::class, 'store']);
    Route::get('edit-agent/{id}', [AgentController::class, 'edit']);
    Route::get('agent-profile/{id}', [AgentController::class, 'agent_profile']);
    Route::post('update-agent/{id}', [AgentController::class, 'update']);
    Route::post('delete-agent/{id}', [AgentController::class, 'destroy']);
    Route::post('delete-agent-image/{id}', [AgentController::class, 'agent_image_destroy']);
    Route::get('agent-passenger/{id}', [AgentController::class, 'agent_passenger']);



    //------------------------------- Passenger Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::get('passengers', [PassengerController::class, 'index']);
    Route::post('add-passenger', [PassengerController::class, 'store']);
    Route::get('edit-passenger/{id}', [PassengerController::class, 'edit']);
    Route::post('update-passenger/{id}', [PassengerController::class, 'update']);
    Route::post('delete-passenger/{id}', [PassengerController::class, 'destroy']);
    Route::post('passenger/fly/status/{id}', [PassengerController::class, 'change_fly_status']);


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

    Route::prefix('stm')->group(function () {
        Route::get('/edit/{id}', [SMTController::class, 'edit']);
        Route::get('/update/{id}', [SMTController::class, 'update']);
        Route::post('/delete/{id}', [SMTController::class, 'stm_delete']);
        Route::post('/passenger/delete/{id}', [SMTController::class, 'stm_passenger_delete']);
        Route::get('/processing-date/{id}', [SMTController::class, 'stm_processing_date']);
    });


     //------------------------------- ManPowerManage Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::post('manpower-search-passport', [ManPowerManageController::class, 'search_passport']);
    Route::get('manpower-lists', [ManPowerManageController::class, 'index']);
    Route::post('add-manpower-passport', [ManPowerManageController::class, 'store']);
    Route::get('manpower-passports/{id}', [ManPowerManageController::class, 'manpower_passports']);
    Route::get('manpower/edit/{id}', [ManPowerManageController::class, 'manpower_edit']);
    Route::post('manpower-change-passport-status', [ManPowerManageController::class, 'change_passport_status']);
    Route::post('manpower/delete/{id}', [ManPowerManageController::class, 'manpower_delete']);
    Route::post('manpower/passenger/delete/{id}', [ManPowerManageController::class, 'manpower_passenger_delete']);


    
     //------------------------------- TKT Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::prefix('tkt')->group(function () {
        Route::post('/search-passport', [TKTController::class, 'search_passport']);
        Route::get('/lists', [TKTController::class, 'index']);
        Route::post('/add-passport', [TKTController::class, 'store']);
        Route::get('/passports/{id}', [TKTController::class, 'Tkt_passports']);
        Route::post('/change-passport-status', [TKTController::class, 'change_passport_status']);
        Route::get('/edit/{id}', [TKTController::class, 'edit']);
        Route::post('/delete/{id}', [TKTController::class, 'tkt_delete']);
        Route::post('/passenger/delete/{id}', [TKTController::class, 'tkt_passenger_delete']);
    });



     //------------------------------- Interview Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::prefix('interview')->group(function () {
        Route::post('/search-passenger', [InterviewController::class, 'search_passenger']);
        Route::get('/edit/{id}', [InterviewController::class, 'edit']);
        Route::post('/update/{id}', [InterviewController::class, 'update']);
        Route::post('/add', [InterviewController::class, 'store']);
        Route::post('/change-fly-status/{id}', [InterviewController::class, 'change_fly_status']);
    });
    

     //------------------------------- DataSearchController Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::post('trade-search-by-company', [DataSearchController::class, 'search_trade_by_company']);
    Route::post('/search-passenger', [DataSearchController::class, 'search_passenger']);
    Route::get('search-sector-trade-by-company/{id}', [DataSearchController::class, 'search_sector_trade_by_company_id']);
    Route::get('search-sector-by-company/{id}', [DataSearchController::class, 'search_sector_by_company_id']);

    
    
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


    //------------------------------- Interview Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::prefix('branch')->group(function () {
        Route::get('/lists', [BranchController::class, 'index']);
        Route::post('/store', [BranchController::class, 'store']);
        Route::get('/edit/{id}', [BranchController::class, 'edit']);
        Route::post('/update/{id}', [BranchController::class, 'update']);
        Route::post('/delete/{id}', [BranchController::class, 'destroy']);
    });


    //------------------------------- Interview Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::prefix('bank')->group(function () {
        Route::get('/lists', [BankController::class, 'index']);
        Route::post('/add', [BankController::class, 'store']);
        Route::get('/edit/{id}', [BankController::class, 'edit']);
        Route::post('/update/{id}', [BankController::class, 'update']);
        Route::post('/delete/{id}', [BankController::class, 'destroy']);
    });



    //------------------------------- PaymentController Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::prefix('payment')->group(function () {
        Route::get('/lists', [PaymentController::class, 'index']);
        Route::post('/passenger', [PaymentController::class, 'passenger_payment']);
        Route::get('/edit/{id}', [PaymentController::class, 'edit']);
        Route::post('/update/{id}', [PaymentController::class, 'update']);
        Route::post('/search/passenger', [PaymentController::class, 'search_passenger']);
        Route::post('/delete/{id}', [PaymentController::class, 'destroy']);
        Route::get('/history/for/passenger/{id}', [PaymentController::class, 'passenger_payment_history']);
    });



    //------------------------------- ReportController Api Routes --------------------------\\
    //------------------------------------------------------------------\\
    Route::prefix('filter')->group(function () {
        Route::post('/stm', [STMReportController::class, 'stm_report_filter']);
        Route::post('/company/by-visa-no', [STMReportController::class, 'company_by_visa_no']);

    });


