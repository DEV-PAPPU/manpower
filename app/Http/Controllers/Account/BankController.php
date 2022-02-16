<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Bank;

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

    public function destroy($id)
    {
        $branch = Bank::findOrfail($id);

        if($branch){
            $branch->delete();

            return response()->json(['msg' => 'Bank Delete Sucess'], 200);
        }else {
            return response()->json('failed', 404);
        }
    }

}
