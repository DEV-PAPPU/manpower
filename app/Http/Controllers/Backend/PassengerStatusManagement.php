<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Passenger;
use App\Models\Requisition;
use App\Models\RequisitionTradeInfo;
use App\Models\RequisitionCompanySector;
use App\Models\PassportStatusManagement;
use DB;

class PassengerStatusManagement extends Controller
{
    
    public function index(){

        $data = PassportStatusManagement::with('passenger','agent','company','trade', 'interview',
                   'sector','stmpassport', 'manpowerpassport',  'tktpassport')
                   ->get();    

       return response()->json($data, 200); 
   }

}
