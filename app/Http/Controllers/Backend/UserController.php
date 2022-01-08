<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
class UserController extends Controller
{
    public function index(){
        
        $users = User::latest()->get();

        return response()->json($users, 200);
    }

    public function store (Request $request){
       
       
        $this->validate($request,[

            'name' => 'required',
            'phone' => 'required',
            'email' => ['required', 'email', 'unique:users'],
        ]);
    
         $user = new User();
         $user->name = $request->name;
         $user->role = $request->role;
         $user->phone = $request->phone;
         $user->email = $request->email;
         $user->status = $request->status;
         $user->save();
    
        return response()->json(['msg' => 'User Created Sucess'], 200);
    }


    public function edit($id)
    {
        $User = User::find($id);
        return response()->json($User, 200);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $User
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

         $user = User::findOrfail($id);
         $user->name = $request->name;
         $user->role = $request->role;
         $user->phone = $request->phone;
         $user->email = $request->email;
         $user->status = $request->status;
         $user->save();

         return response()->json(['msg' => 'User Updated Sucess'], 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $User
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findOrfail($id);

        if($user){
            $user->delete();
            return response()->json(['msg' => 'Delete Sucess'], 200);
        }else {
            return response()->json('failed', 404);
        }
    }
}
