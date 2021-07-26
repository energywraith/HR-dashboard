<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\DB;
use App\Models\JobPosition;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $position = new JobPosition([
            'company_id' => 1,
            'name' => 'Front end developer',
            'description' => 'Cool job description',
            'seniority' => 'Junior',
            'hash_url' => substr(md5(1), 0, 12)
        ]);

        $position->save();
    }
}
