<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'first_name' => 'Kadir',
            'last_name' => 'Admin',
            'email' => 'kadir@kadir.com',
            'password' => Hash::make('Sam55sam'),
            'is_admin' => true,
        ]);
    }
}
