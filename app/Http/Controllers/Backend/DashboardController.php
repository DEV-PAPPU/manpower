<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Requisition;
use App\Models\MofaInformation;
use App\Models\RequisitionVisainfo;
use App\Models\RequisitionTradeInfo;
use App\Models\Passenger;
use App\Models\PassportStatusManagement;
use App\Models\ManPower;
use App\Models\Company;
use App\Models\User;
use App\Models\Interview;
class DashboardController extends Controller
{
    public function dashboard_status(){

        $passenger = Passenger::count();
        $user = User::count();
        $company = Company::count();
        $passport = PassportStatusManagement::count();

        return response()->json([
               'passenger' => $passenger,
               'user' => $user,
               'company' => $company,
               'passport' => $passport,
        ], 200);
    }
}
