<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobPositionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('job_positions', function (Blueprint $table) {
            $table->id();
            // id of the company that created the job application
            $table->integer('company_id');
            $table->string('name');
            $table->string('description');
            $table->string('seniority');
            $table->string('hash_url')->nullable();
            // arrays
            $table->json('responsibilities')->nullable();
            $table->json('expectations')->nullable();
            $table->json('nice_to_have')->nullable();
            $table->json('benefits')->nullable();
            // objects
            $table->json('location')->nullable(); // city, province, country
            $table->json('salary_range')->nullable(); // from, to

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('job_positions');
    }
}
