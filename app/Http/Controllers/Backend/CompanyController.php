<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Company;
use App\Models\District;
use App\Models\CompanySector;
use DB;
class CompanyController extends Controller
{

    public function index(){
        

        $companies = DB::table('companies')
                    ->leftJoin('countries', 'countries.id', 'companies.country_id')
                    ->select('companies.id','companies.company_name','companies.company_address', 'companies.contact_person',           'companies.company_email', 'companies.company_phone' ,'companies.is_approved', 'countries.country_name')
                    ->get();

        return response()->json([
            'companies' => $companies,
        ], 200);
    }



    public function store (Request $request){
       
        // dd($request->all());

        $this->validate($request,[
            'company_name' => 'required',
            'company_phone' => 'required',
            'country_id' => 'required',
        ]);
    
         $company = new Company();
         $company->company_name = $request->company_name;
         $company->company_address = $request->company_address;
         $company->contact_person = $request->contact_person;
         $company->company_phone = $request->company_phone;
         $company->company_email = $request->company_email;
         $company->country_id = $request->country_id;
         $company->is_approved = $request->is_approved;
         $company->save();

 
        //  foreach($sectors as $sector){

        //     // return $sector;
        //     $companysector = new CompanySector();
        //     $companysector->company_id = $company->id;
        //     $companysector->sector_id = $sector['id'];
        //     $companysector->save();
        //  }

    
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
         $company->company_name = $request->company_name;
         $company->company_address = $request->company_address;
         $company->contact_person = $request->contact_person;
         $company->company_phone = $request->company_phone;
         $company->company_email = $request->company_email;
         $company->country_id = $request->country_id;
         $company->is_approved = $request->is_approved;
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
