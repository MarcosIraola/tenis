<?php


namespace App;


use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    public function host_player_id()
    {
        return $this->belongsTo('App\User', 'host_player_id');
    }

    public function guest_player_id()
    {
        return $this->belongsTo('App\User', 'guest_player_id');
    }

    protected $fillable = [
        'host_player_id', 'guest_player_id', 'result', 'date',
    ];

}
