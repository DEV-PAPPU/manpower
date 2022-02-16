<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Company;
use App\Models\District;
use App\Models\CompanySector;
use App\Models\Country;
use App\Models\Requisition;
use App\Models\Passenger;
use DB;
class CompanyController extends Controller
{

    public function index(){
        

        $companies = DB::table('companies')
                    ->leftJoin('countries', 'countries.id', 'companies.country_id')
                    ->select('companies.id','companies.company_name','companies.company_address', 'companies.contact_person',           'companies.company_email', 'companies.company_phone' ,'companies.company_status', 'countries.country_name', 'companies.company_note', 'companies.company_brand_logo',)
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
         $company->company_note = $request->company_note;
         $company->company_status = $request->status;
         $company->company_note = $request->note;
        
         if($request->hasFile('image')){

            $image = $request->image;
            $image_new_name = time() . '.' . $image->getClientOriginalExtension();
            $image->move('storage/images/', $image_new_name);
            $company->company_brand_logo = '/storage/images/' . $image_new_name;
            $company->save();

        }
    
        return response()->json(['msg' => 'Company Created Sucess'], 200);
    }


    public function edit($id)
    {
        $company = Company::find($id);

        $country = Country::where('id', $company->country_id)->first();

        return response()->json([
            'company' => $company,
            'country' => $country,
        ], 200);

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
        //  dd($request->all());

         $company = Company::findOrfail($id);
         $company->company_name = $request->company_name;
         $company->company_address = $request->company_address;
         $company->contact_person = $request->contact_person;
         $company->company_phone = $request->company_phone;
         $company->company_email = $request->company_email;
         $company->country_id = $request->country_id;
         $company->company_status = $request->company_status;
         $company->company_note = $request->company_note;
         

         if($request->hasFile('image')){

            $companyImage = $company->company_brand_logo;
            $imagePath = public_path($companyImage);

            if ($companyImage && file_exists($imagePath)) {
                unlink($imagePath);
            }

            $image = $request->image;
            $image_new_name = time() . '.' . $image->getClientOriginalExtension();
            $image->move('storage/images/', $image_new_name);
            $company->company_brand_logo = '/storage/images/' . $image_new_name;
            $company->save();
        }
        else{
            $company->save();
        }

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

        $passenger =  Passenger::where('passenger_company_id', $company->id)->first();
        $requisition =  Requisition::where('company_id', $company->id)->first();

         $error_msg = '';
         $msg = '';

         if($passenger){
            $error_msg = 'Company Has Some Passengers So Can`t Delete';
        }
        elseif($requisition){
            $error_msg = 'Company Has Some Requisition So Can`t Delete';
        }
        else {

            $imagePath = public_path($company->company_brand_logo);
            unlink($imagePath);

            $company->delete();

            $msg = 'Delete Sucess';
            
        }

        return response()->json([
            'msg' =>  $msg,
            'error_msg' => $error_msg
        ], 200);

    }
}
