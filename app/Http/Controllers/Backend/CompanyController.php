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
        
        $companies = Company::latest()->get();

        $companysector = DB::table('company_sectors')
                    ->leftJoin('sectors', 'sectors.id', '=', 'company_sectors.sector_id')
                    ->select('company_sectors.company_id', 'sectors.sector_name', 'sectors.id')
                    ->get();

        return response()->json([
            'companies' => $companies,
            'companysector' => $companysector
        ], 200);
    }



    public function store (Request $request){
       
        // dd($request->all());

        $sectors = $request->sector_id;


       
        $this->validate($request,[
            'company_name' => 'required',
            'company_address' => 'required',
            'contact_person' => 'required',
            'company_phone' => 'required',
            'sector_id' => 'required',
            'company_email' => ['required', 'email', 'unique:companies'],
        ]);
    
         $company = new Company();
         $company->company_name = $request->company_name;
         $company->company_address = $request->company_address;
         $company->contact_person = $request->contact_person;
         $company->company_phone = $request->company_phone;
         $company->company_email = $request->company_email;
         $company->save();

 
         foreach($sectors as $sector){

            // return $sector;
            $companysector = new CompanySector();
            $companysector->company_id = $company->id;
            $companysector->sector_id = $sector['id'];
            $companysector->save();
         }

    
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
         $company->company_name = $request->name;
         $company->company_address = $request->address;
         $company->company_contact_person = $request->contact_person;
         $company->company_phone = $request->phone;
         $company->company_email = $request->email;
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
