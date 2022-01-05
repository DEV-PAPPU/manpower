<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Company;

class CompanyController extends Controller
{

    public function index(){
        
        $companies = Company::latest()->get();

        return response()->json($companies, 200);
    }



    public function store (Request $request){
       
        // dd($request->all());
       
        $this->validate($request,[

            'name' => 'required',
            'address' => 'required',
            'contact_person' => 'required',
            'phone' => 'required',
            'email' => ['required', 'email', 'unique:companies'],
        ]);
    
         $company = new Company();
         $company->name = $request->name;
         $company->address = $request->address;
         $company->contact_person = $request->contact_person;
         $company->phone = $request->phone;
         $company->email = $request->email;
    
         $company->save();
    
        return response()->json(['msg' => 'Company Created Sucess'], 200);
    }


    public function edit($id)
    {
        $company = Company::find($id);
        return response()->json($company, 200);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

         $company = Company::findOrfail($id);
         $company->name = $request->name;
         $company->address = $request->address;
         $company->contact_person = $request->contact_person;
         $company->phone = $request->phone;
         $company->email = $request->email;
         $company->save();

         return response()->json(['msg' => 'Company Updated Sucess'], 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $company = Company::findOrfail($id);

        if($company){
            $company->delete();

            return response()->json(['msg' => 'Delete Sucess'], 200);
        }else {
            return response()->json('failed', 404);
        }
    }
}
