<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'number',
        'resume',
        'company_id',
        'position_id',
        'additional_questions'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['resume'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'additional_questions' => 'object'
    ];

    /**
     * The model's default values for attributes.
     *
     * @var array
     */

    protected $attributes = [
        'additional_questions' => '{}',
    ];
}
