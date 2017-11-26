<?php
/**
 * Created by PhpStorm.
 * User: benzo
 * Date: 25. 11. 2017
 * Time: 19:47
 */

namespace App\Http\Controllers;

class UserController extends Controller
{
    public function login()
    {
        return response()->json([
            'token' => 'aoksodjij129120313i4k23o423o',
            'username'  => 'Ales',
            'email' => 'ales.test@mail.com',
            'type'  => 'admin',
        ], 200);
    }
}