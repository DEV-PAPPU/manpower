<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Passenger;
use App\Models\RequisitionTradeInfo;
use App\Models\Payment;

use DB;
class PaymentController extends Controller
{
    public function index(){
        
        // $passengers = DB::table('passengers')
        //             ->leftJoin('requisition_trade_infos', 'requisition_trade_infos.id', '=', 'passengers.passenger_trade_id')
        //             ->leftJoin('companies', 'companies.id', 'passengers.passenger_company_id')
        //             ->leftJoin('districts', 'districts.id', '=', 'passengers.district_id')
        //             ->select('passengers.id','passengers.passenger_name','passengers.passenger_phone','passengers.passport_no',
        //               'passengers.passenger_total_pay', 'requisition_trade_infos.price_reference','requisition_trade_infos.trade',
        //              'districts.district_name', 'companies.company_name','passengers.passenger_discount')
        //             ->get();

        $data = Passenger::with('agent','trade','company')
                   ->orderBy('passenger_name', 'asc')
                   ->get();  

        return response()->json($data, 200);
    }

    public function passenger_payment(Request $request){
       
        $this->validate($request,[

            'payment_type' => 'required',
            'pay_amount' => 'required',
            'pay_date' => 'required',
        ]);

        $error_msg = '';
        $msg = '';
        $due = '';

        $passenger = Passenger::findOrfail($request->passenger_id);
        $trade = RequisitionTradeInfo::where('id', $passenger->passenger_trade_id)->first();
            
        //calculating passenger total payment
        $total = $passenger->passenger_total_pay + $request->pay_amount;

        $total_check = $passenger->passenger_total_pay + $request->pay_amount +  $passenger->passenger_discount;

        if($total_check > $trade->price_reference){
            $error_msg = 'Amount should not be getterthan visa price';
        }
        else{
            $payment = new Payment();
            $payment->passenger_id = $request->passenger_id;
            $payment->payment_type = $request->payment_type;
            $payment->pay_amount = $request->pay_amount;
            $payment->pay_date = $request->pay_date;
            $payment->bank_id = $request->bank_id;
            $payment->branch_id = $request->branch_id;
            $payment->bank_check_date = $request->check_date;
            $payment->bank_check_number = $request->check_number;
            $payment->save();



            $passenger->passenger_total_pay = $total;
            $passenger->save();

            $msg = 'Payment Success';
        }
    
         


         return response()->json([
            'msg' =>  'Payment Success',
            'error_msg' => $error_msg
        ], 200);

    }


    public function passenger_payment_history($id){
      
        $data = Payment::with('bank','branch')->where('passenger_id', $id)->get(); 

        return response()->json($data, 200);
    }


    public function search_passenger(Request $request){
        
        $passenger = Passenger::where('passport_no', $request->passport_no)->first();
        
        $data = '';
        $error_msg = '';
        
        //checking passenger payment complete or not
        if($passenger){
            
            $trade = RequisitionTradeInfo::where('id', $passenger->passenger_trade_id)->first();

           $passenger_total = $passenger->passenger_total_pay + $passenger->passenger_discount;
           
            if($passenger_total == $trade->price_reference){
                $error_msg = 'Passenger Payment Complete';
            }
            else{
                $data = DB::table('passengers')
                ->leftJoin('companies', 'companies.id', 'passengers.passenger_company_id')
                ->leftJoin('requisition_trade_infos', 'requisition_trade_infos.id', 'passengers.passenger_trade_id')
                ->select('passengers.id','passengers.passenger_name','passengers.passport_no',
                         'passengers.passport_source','companies.company_name',
                          'requisition_trade_infos.trade', 'requisition_trade_infos.price_reference',
                         'passengers.passenger_total_pay', 'passengers.passenger_discount'
                        )
                ->where('passengers.id', $passenger->id)   
                ->first();

                $total_pay =  $data->passenger_total_pay + $data->passenger_discount;
                $due =  $data->price_reference - $total_pay;
            }

        }
        else{
            $error_msg = 'Passenger not found!';
        }


            

        return response()->json([
            'passenger' => $data,
            'due' => $due,
            'error_msg' => $error_msg,
        ], 200,);
    }


    public function filter_payment(Request $request){
        
        $query = Passenger::with('agent','trade')
                   ->orderBy('passenger_name', 'asc');  


        // trade filter
        if ($request->trade) {

            $trade = $request->trade;

            $query->whereHas('trade', function ($q) use ($trade) {
                $q->where('trade', $trade);
               });
           }

           
        // visa filter
        if ($request->visa_no) {

            $visa_no = $request->visa_no;

            $query->whereHas('trade', function ($q) use ($visa_no) {
                $q->where('trade_visa_no', $visa_no);
               });
           }


        if($request->company_id){

            $query->where('passenger_company_id', $request->company_id);
        }



          $data = $query->get();

        return response()->json($data, 200);
    }




    
}
