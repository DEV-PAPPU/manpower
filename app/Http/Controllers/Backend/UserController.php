<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Auth;
use Hash;

class UserController extends Controller
{
    public function index(){
        
        $users = User::latest()->get();

        return response()->json($users, 200);
    }

    public function store (Request $request){
       
    //    dd($request->all());

        $request->validate([
            'name'                  => ['required'],
            'role'                  => ['required'],
            'email'                 => ['required', 'email', 'unique:users'],
            'password'              => ['required', 'min:6', 'confirmed'],
            'password_confirmation' => ['required'],
        ]);

         $user = new User();
         $user->name = $request->name;
         $user->role = $request->role;
         $user->phone = $request->phone;
         $user->email = $request->email;
         $user->status = $request->status;
         $user->address = $request->address;
         $user->password = Hash::make($request->password);

         if($request->hasFile('image')){

            $image = $request->image;
            $image_new_name = time() . '.' . $image->getClientOriginalExtension();
            $image->move('storage/images/', $image_new_name);
            $user->avatar = '/storage/images/' . $image_new_name;
            $user->save();

        }


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
         $user->address = $request->address;
         $user->role = $request->role;
         $user->status = $request->status;
         $user->password = Hash::make($request->password);

         if($request->hasFile('image')){

            $avatar = $user->avatar;
            $imagePath = public_path($avatar);

            if ($avatar && file_exists($imagePath)) {
                unlink($imagePath);
            }

            $image = $request->image;
            $image_new_name = time() . '.' . $image->getClientOriginalExtension();
            $image->move('storage/images/', $image_new_name);
            $user->avatar = '/storage/images/' . $image_new_name;
            $user->save();
        }

        else{
            $user->save();
        }


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

        $msg = '';
        $error_msg = '';
        

        if($user->role == 'superadmin'){
           
            $error_msg = 'Super-Admin can`t delete please change role then delete';

        }
        else{
            $avatar = $user->avatar;
            $imagePath = public_path($avatar);

            if ($avatar && file_exists($imagePath)) {
                unlink($imagePath);
            }
            
            $user->delete();
            $msg = 'Delete Sucess';
        }

        return response()->json([
            'msg'=> $msg,
            'error_msg' => $error_msg,
        ], 200,);
    }


    public function password_reset(Request $request)
    {

        $massage = '';
        $error = '';
        $isUser = '';
        

        $user_data = User::where('email', $request->email)->first();

        if($user_data){

           $isUser = 'yes';

           if($user_data && $request->password){
           
            $this->validate($request, [
              'password' => 'required|string|min:6',
            ]);
            
            $user = User::find($user_data->id);
            $user->update([
                'password' => bcrypt($request->password)
                ]);

            $massage = 'Password Updated';
        }
           
        }

        

        else{
            $error = 'we can`t find any user inavlid email';
        }


        return response()->json([
            'msg' => $massage,
            'isUser' => $isUser,
            'error_msg' => $error
        ], 200);

    }
}
