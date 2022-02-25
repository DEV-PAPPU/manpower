<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Branch;
use App\Models\Payment;

class BranchController extends Controller
{
    public function index(){
        
        $branch = Branch::latest()->get();

        return response()->json($branch, 200);
    }

    public function store (Request $request){
       
        $this->validate($request,[

            'branch_name' => 'required',
        ]);
    
         $branch = new Branch();
         $branch->branch_name = $request->branch_name;
         $branch->save();
    
        return response()->json(['msg' => 'Branch Created Sucess'], 200);
    }

    public function update(Request $request, $id)
    {

         $branch = Branch::findOrfail($id);
         $branch->branch_name = $request->branch_name;
         $branch->save();

         return response()->json(['msg' => 'Branch Updated Sucess'], 200);

    }


    public function destroy($id){

        $branch = Branch::findOrfail($id);

        $error_msg = '';
        $msg = '';

        $payment = Payment::where('branch_id', $branch->id)->first();

        if($payment){
            $error_msg = 'Branch Has Some Entry So Can`t Delete';
            
        }
        else {
            $branch->delete();
            $msg = 'Branch  Delete Sucess ';
        }

        return response()->json([
            'msg' =>  $msg,
            'error_msg' => $error_msg
        ], 200);
    }



    public function search_branch($name)
    {

        $branch = Branch::where('branch_name', 'LIKE', "%{$name}%")->get();

        return response()->json($branch, 200);
    }
}
