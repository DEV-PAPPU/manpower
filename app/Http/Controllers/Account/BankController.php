<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Bank;
use App\Models\Payment;

class BankController extends Controller
{
    public function index(){
        
        $branch = Bank::latest()->get();

        return response()->json($branch, 200);
    }

    public function store (Request $request){
       
        $this->validate($request,[

            'bank_name' => 'required',
        ]);
    
         $branch = new Bank();
         $branch->bank_name = $request->bank_name;
         $branch->save();
    
        return response()->json(['msg' => 'Bank Created Sucess'], 200);
    }

    public function update(Request $request, $id)
    {

         $branch = Bank::findOrfail($id);
         $branch->bank_name = $request->bank_name;
         $branch->save();

         return response()->json(['msg' => 'Bank Updated Sucess'], 200);

    }


    public function destroy($id){

        $bank = Bank::findOrfail($id);

        $error_msg = '';
        $msg = '';

        $payment = Payment::where('bank_id', $bank->id)->first();

        if($payment){
            $error_msg = 'Bank Has Some Entry So Can`t Delete';
            
        }
        else {
            $bank->delete();
            $msg = 'Bank  Delete Sucess ';
        }

        return response()->json([
            'msg' =>  $msg,
            'error_msg' => $error_msg
        ], 200);
    }

}
