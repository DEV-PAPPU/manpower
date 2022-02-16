<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Passenger;
use DB;

class PassengerStatusManagement extends Controller
{
    
    public function index(){

        $data = Passenger::with('agent','company','trade', 'interview',
                   'sector', 'stmpassport', 'manpowerpassport', 'tktpassport')
                   ->orderBy('passenger_name', 'asc')
                   ->get();    

       return response()->json($data, 200); 
   }

}
