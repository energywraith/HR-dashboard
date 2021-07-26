<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobPosition extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'company_id',
        'name',
        'description',
        'seniority',
        'responsibilities',
        'expectations',
        'nice_to_have',
        'benefits',
        'location',
        'salary_range',
        'hash_url'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'responsibilities' => 'array',
        'expectations' => 'array',
        'nice_to_have' => 'array',
        'benefits' => 'array',
        'location' => 'object',
        'salary_range' => 'object',
    ];

    /**
     * The model's default values for attributes.
     *
     * @var array
     */

    protected $attributes = [
        'responsibilities' => '[]',
        'expectations' => '[]',
        'nice_to_have' => '[]',
        'benefits' => '[]',
        'location' => '{
            "city": null,
            "province": null,
            "country": null,
        }',
        'salary_range' => '{
            "from": null,
            "to": null,
            "currency": null
        }',
    ];
}
