<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Requisition;
use App\Models\MofaInformation;
use App\Models\RequisitionVisainfo;
use App\Models\RequisitionTradeInfo;
use App\Models\Passenger;
use App\Models\ManPower;
use App\Models\Company;
use App\Models\User;
use App\Models\Interview;
use App\Models\Agent;
use App\Models\Tkt;
use App\Models\Stm;
use DB;
class DashboardController extends Controller
{
    public function dashboard_status(){

        $passenger = Passenger::count();
        $user = User::count();
        $company = Company::count();
        $agent = Agent::count();
        $mp = ManPower::count();
        $stm = Stm::count();
        $totalfly = Interview::where('passenger_fly', 1)->count();

        $totalcollection = DB::table("payments")->sum("pay_amount");

        return response()->json([
               'passenger' => $passenger,
               'user' => $user,
               'company' => $company,
               'agent' => $agent,
               'mp' => $mp,
               'stm' => $stm,
               'totalfly' => $totalfly,
               'totalcollection' => $totalcollection,
        ], 200);
    }
}
