<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Company;
use App\Models\District;
class TestController extends Controller
{
    public function store (Request $request){
       
        // dd($request->all());
       
        //  $company = new District();
        //  $company->district_name = $request->name;
        //  $company->save();
        //  return response()->json(['msg' => 'Company Created Sucess'], 200);

       
        $this->validate($request,[
            'company_name' => 'required',
            'company_address' => 'required',
            'contact_person' => 'required',
            'company_phone' => 'required',
            'company_email' => ['required', 'email', 'unique:companies'],
        ]);
    
         $company = new Company();
         $company->company_name = $request->name;
         $company->company_address = $request->address;
         $company->contact_person = $request->contact_person;
         $company->company_phone = $request->phone;
         $company->company_email = $request->email;
         $company->save();
    
        return response()->json(['msg' => 'Company Created Sucess'], 200);
    }
}
