<?php

use Illuminate\Http\Request;

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});

/*
|--------------------------------------------------------------------------
| User Routes
|--------------------------------------------------------------------------
*/

Route::get('users', 'UserController@all');
Route::get('users/{id}', 'UserController@getById');
Route::post('users','UserController@create');

/*
|--------------------------------------------------------------------------
| Match Routes
|--------------------------------------------------------------------------
*/

Route::get('games', 'GameController@all');
Route::get('games/completed/{id}', 'GameController@getCompletedGamesByHostPlayerId');
Route::get('games/created/{id}', 'GameController@getCreatedGamesByHostPlayerId');
Route::post('games','GameController@create');

