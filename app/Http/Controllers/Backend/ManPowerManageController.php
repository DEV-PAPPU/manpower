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
use App\Models\ManPowerPassport;
use DB;
class ManPowerManageController extends Controller
{
    public function index(){
        $data = ManPower::with('mppassport')->latest()->get();
        return response()->json($data, 200);
    }

    public function manpower_passports($id){
        $data = ManPowerPassport::with('passenger')->where('man_power_id', $id)->latest()->get();
        return response()->json($data, 200);
    }

    public function search_passport(Request $request){
        
        $data = '';
        $msg = '';

        $old_passport = ManPowerPassport::where('man_power_passport_no',  $request->passport_no)->first();
       
        $passenger = Passenger::where('passport_no',  $request->passport_no)->first();

        if($old_passport){
            $msg = 'Already added in Man Power list';
        }
        else{

            if($passenger){

                if($passenger->passport_source == 'agent'){
                    $passenger = Passenger::with('agent')->where('passport_no',  $request->passport_no)->first();
                }
    
            }
    
            // checking passenger of request passport_no
            if($passenger){
    
                $mofa = MofaInformation::with('trade')->where('passenger_id', $passenger->id)->first();
                
                // checking trade of passenger 
                if($mofa){
    
                    $mofa_info = MofaInformation::with('trade','passenger')->where('passenger_id', $passenger->id)->first();
                    
                    // getting company name
                     $company_info = Requisition::with('company')->where('id',$mofa_info->trade->requisition_id)->first();
                    
            
                     $agent_name = '';
                      
                     if($passenger->passport_source == 'agent'){
                         $agent_name = $passenger->agent->agent_name;
                     }
    
                    // data collection 
                    $data = array(
                        'passenger_id'  => $passenger->id,
                        'passport_no'  => $passenger->passport_no,
                        'passenger_name'  => $passenger->passenger_name,
                        'passport_source'  => $passenger->passport_source,
                        'agent_name'  => $agent_name,
                        'trade'  => $mofa_info->trade->trade,
                        'company_name'  => $company_info->company->company_name,
                    );
                    
                }
    
                else{
                    $msg = 'Please entry in Mofa-List';
                }
            }
    
            else{
              
                $msg = 'Passenger  Not found';
            } 

        }


      
        

        return response()->json([
            'data' => $data,
            'msg' => $msg,
        ], 200,);
    }

    public function store(Request $request){
         

        $manpower = new ManPower();
        $manpower->date = $request->date;
        $manpower->save();

        foreach( $request->passport as $item){
            $passport = new ManPowerPassport();
            $passport->man_power_id = $manpower->id;
            $passport->passenger_id = $item['passenger_id'];
            $passport->man_power_passport_no = $item['passport_no'];
            $passport->save();
        }

        return response()->json(['msg' => 'MP Added Sucess'], 200);

    }


    public function change_passport_status(Request $request){
           
            // checking for change status of manpower table. if all passport staus Complate then manpower table status will change to Complate
             $manpower_total_passports = $request->total_passport;

             //getting Complate passports 
             $passports =  ManPowerPassport::where('status', '1')->get();
             $total_passport = $passports->count();

             if($total_passport == $manpower_total_passports){
                $manpower =  ManPower::findOrfail($request->manpower_id);
                $manpower->status = '1';
                $manpower->save();
                 
             }

            
            // change single passport status
            $passport =  ManPowerPassport::findOrfail($request->manpower_passport_id);
            $passport->status = 1;
            $passport->save();

            return response()->json(['msg' => 'Passport Status Changed'], 200);

    }
}
