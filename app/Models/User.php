<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'company_details' => 'object',
        'application_form' => 'array',
    ];

    /**
     * The model's default values for attributes.
     *
     * @var array
     */

    protected $attributes = [
        'company_details' => '{
            "description": ""
        }',
        'application_form' => '[
            { "id": 1, "key": "name", "label": "Full name", "type": "text" },
            { "id": 2, "key": "email", "label": "Email address", "type": "email" },
            { "id": 3, "key": "number", "label": "Phone number", "type": "number" },
            { "id": 4, "key": "resume", "label": "CV/Resume", "type": "file" }
        ]'
    ];
}