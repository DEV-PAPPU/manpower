<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use App\Models\Passenger;
use App\Models\Agent;
use App\Models\District;
use App\Models\AgentImage;
class AgentController extends Controller
{

    public function index(){
        
        $agents = Agent::with('district')->get();
        // $agents = DB::table('agents')
        //             ->leftJoin('districts', 'agents.id', '=', 'district_id')
        //             // ->select('agents.id','agents.name', 'agents.email', 'districts.name');
        //             ->get();

        return response()->json($agents, 200);
    }


    public function store (Request $request){
       
    //    dd($request->all());


        $this->validate($request,[

            'agent_name' => 'required',
            'agent_phone' =>'required',
            'district_id' => 'required',
        ]);
    
         $agent = new Agent();
         $agent->agent_name = $request->agent_name;
         $agent->agent_address_area = $request->agent_address_area;
         $agent->agent_address_office = $request->agent_address_office;
         $agent->agent_email = $request->agent_email;
         $agent->district_id = $request->district_id;
         $agent->agent_phone = $request->agent_phone;
         $agent->agent_status = $request->agent_status;
         $agent->agent_imo_number = $request->agent_imo_number;
         $agent->agent_wp_number = $request->agent_wp_number;
         $agent->agent_ref_1_name =  $request->agent_ref_1_name;
         $agent->agent_ref_1_phone =  $request->agent_ref_1_phone;
         $agent->agent_ref_1_imo_number =  $request->agent_ref_1_imo_number;
         $agent->agent_ref_1_wp_number =  $request->agent_ref_1_wp_number;
         $agent->agent_ref_2_name = $request->agent_ref_2_name;
         $agent->agent_ref_2_phone = $request->agent_ref_2_phone;
         $agent->agent_ref_2_imo_number = $request->agent_ref_2_imo_number;
         $agent->agent_ref_2_wp_number = $request->agent_ref_2_wp_number;
         $agent->agent_ref_3_name = $request->agent_ref_3_name;
         $agent->agent_ref_3_phone = $request->agent_ref_3_phone;
         $agent->agent_ref_3_imo_number = $request->agent_ref_3_imo_number;
         $agent->agent_ref_3_wp_number = $request->agent_ref_3_wp_number;

         if($request->hasFile('image')){
            $image = $request->image;
            $image_new_name = time() . '.' . $image->getClientOriginalExtension();
            $image->move('storage/images/', $image_new_name);
            $agent->agent_image = '/storage/images/' . $image_new_name;
            $agent->save();
        }

           //Inserting  images
        if($request->hasFile('files')){

            foreach($request->file('files') as  $image){

                // $name = $image->getClientOriginalName();
                $name = time().rand(1,100).'.'.$image->getClientOriginalExtension();
                $image->move('storage/images/', $name);
                $last_img = '/storage/images/' . $name;

                //Inserting agent images to {ProductGallery} table
                $agentimg = new AgentImage();
                $agentimg->agent_id = $agent->id;
                $agentimg->image = $last_img;
                $agentimg->save();
            }
        }
        
       return response()->json(['msg' =>'Agent Added Sucess'], 200);

    }


    public function edit($id)
    {
        $agent = Agent::find($id);
        $agent_images =  AgentImage::where('agent_id', $id)->get();
        $district = District::where('id', $agent->district_id)->first();

        return response()->json([
            'agent' => $agent,
            'images' => $agent_images,
            'district' => $district,
        ], 200);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\agent  $agent
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

            $agent = Agent::findOrfail($id);
            $agent->agent_name = $request->agent_name;
            $agent->agent_address_area = $request->agent_address_area;
            $agent->agent_address_office = $request->agent_address_office;
            $agent->agent_email = $request->agent_email;
            $agent->district_id = $request->district_id;
            $agent->agent_phone = $request->agent_phone;
            $agent->agent_status = $request->agent_status;
            $agent->agent_imo_number = $request->agent_imo_number;
            $agent->agent_wp_number = $request->agent_wp_number;
            $agent->agent_ref_1_name =  $request->agent_ref_1_name;
            $agent->agent_ref_1_phone =  $request->agent_ref_1_phone;
            $agent->agent_ref_1_imo_number =  $request->agent_ref_1_imo_number;
            $agent->agent_ref_1_wp_number =  $request->agent_ref_1_wp_number;
            $agent->agent_ref_2_name = $request->agent_ref_2_name;
            $agent->agent_ref_2_phone = $request->agent_ref_2_phone;
            $agent->agent_ref_2_imo_number = $request->agent_ref_2_imo_number;
            $agent->agent_ref_2_wp_number = $request->agent_ref_2_wp_number;
            $agent->agent_ref_3_name = $request->agent_ref_3_name;
            $agent->agent_ref_3_phone = $request->agent_ref_3_phone;
            $agent->agent_ref_3_imo_number = $request->agent_ref_3_imo_number;
            $agent->agent_ref_3_wp_number = $request->agent_ref_3_wp_number;

         if($request->image){

            $imagePath = public_path($agent->agent_image);
            unlink($imagePath);
    

            $image = $request->image;
            $image_new_name = time() . '.' . $image->getClientOriginalExtension();
            $image->move('storage/images/', $image_new_name);
            $agent->agent_image = '/storage/images/' . $image_new_name;
            $agent->save();

    
        }
        else{
         $agent->save();
        }

           //  Inserting  images
        if($request->hasFile('files')){

            foreach($request->file('files') as  $image){

                // $name = $image->getClientOriginalName();
                $name = time().rand(1,100).'.'.$image->getClientOriginalExtension();
                $image->move('storage/images/', $name);
                $last_img = '/storage/images/' . $name;

                //Inserting agent images to {ProductGallery} table
                $agentimg = new AgentImage();
                $agentimg->agent_id = $agent->id;
                $agentimg->image = $last_img;
                $agentimg->save();
            }
        }

        return response()->json([
            'msg' => 'Agent Updated Sucess'
        ], 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\agent  $agent
     * @return \Illuminate\Http\Response
     */

    public function destroy($id)
    {

        $agent = Agent::findOrfail($id);

         $agent_images =  AgentImage::where('agent_id', $id)->get();
       
         $passenger =  Passenger::where('agent_id', $agent->id)->first();

         $error_msg = '';
         $msg = '';

         if($passenger){
            $error_msg = 'Agent Has Some Passengers So Can`t Delete';
        }
        else {

            $imagePath = public_path($agent->agent_image);
            unlink($imagePath);

            // delete agent images
            if ($agent_images) {

                foreach($agent_images as $img){
    
                    $imagePath = public_path($img->image);
    
                    unlink($imagePath);
    
                    AgentImage::where('agent_id', $id)->delete();
                }
            }

            $agent->delete();

            $msg = 'Delete Sucess';
            
        }

        
        return response()->json([
            'msg' =>  $msg,
            'error_msg' => $error_msg
        ], 200);

        
    }


    public function agent_image_destroy($id)
    {
         $agent_images =  AgentImage::where('agent_id', $id)->first();


        if ($agent_images) {
             
            $imagePath = public_path($agent_images->image);

            unlink($imagePath);

            $agent_images->delete();

            return response()->json(['msg' => 'Delete Sucess'], 200);
        }
        else {
            return response()->json('failed', 404);
        }

        
    }



}
