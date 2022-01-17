<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use App\Models\Agent;
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
       
       
        $this->validate($request,[

            'agent_name' => 'required',
            'agent_phone' => 'required',
            'district_id' => 'required',
            'agent_email' => 'required',
        ]);
    
         $agent = new Agent();
         $agent->agent_name = $request->agent_name;
         $agent->agent_address = $request->agent_address;
         $agent->agent_area = $request->agent_area;
         $agent->agent_phone = $request->agent_phone;
         $agent->agent_email = $request->agent_email;
         $agent->agent_is_approved = $request->agent_is_approved;
         $agent->district_id = $request->district_id;
         $agent->save();
        
        return response()->json(['msg' => 'Agent Added Sucess'], 200);
    }


    public function edit($id)
    {
        $agent = agent::find($id);
        return response()->json($agent, 200);

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
         $agent->agent_address = $request->agent_address;
         $agent->agent_area = $request->agent_area;
         $agent->agent_phone = $request->agent_phone;
         $agent->agent_email = $request->agent_email;
         $agent->agent_is_approved = $request->agent_is_approved;
         $agent->district_id = $request->district_id;
         $agent->save();

         return response()->json(['msg' => 'Agent Updated Sucess'], 200);

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

        if($agent){
            $agent->delete();

            return response()->json(['msg' => 'Delete Sucess'], 200);
        }else {
            return response()->json('failed', 404);
        }
    }



}
