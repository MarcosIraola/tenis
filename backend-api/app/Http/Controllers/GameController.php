<?php


namespace App\Http\Controllers;


use App\Game;
use Illuminate\Http\Request;

class GameController extends Controller
{
    public function create(Request $request)
    {
        $match = Game::create([
            'host_player_id'=>$request->host_player_id,
            'guest_player_id'=>$request->guest_player_id,
            'result'=>$request->result,
            'date'=>$request->date,
        ]);
        $match->save();
        return response()->json('saved', 201);
    }

    public function all ()
    {
        return response()->json(Game::get()->all());
    }

    public function getByHostPlayerId ($host_player_id)
    {
        return response()->json(Game::where('host_player_id', $host_player_id)->get());
    }

}
