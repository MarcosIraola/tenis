<?php


namespace App\Http\Controllers;


use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function create(Request $request)
    {
        $user = User::create([
            'first_name'=>$request->first_name,
            'last_name'=>$request->last_name,
            'email'=>$request->email,
            'password' => bcrypt($request['password']),
        ]);
        $user->save();
        return response()->json('saved', 201);
    }

    public function all()
    {
        return response()->json(User::get()->all());
    }

    public function getById($id)
    {
        return response()->json(User::where('id', $id)
            ->with('games')
            ->get());
    }

}
