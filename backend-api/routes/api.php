<?php

use Illuminate\Http\Request;

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
Route::get('games/{id}', 'GameController@getByHostPlayerId');
Route::post('games','GameController@create');

