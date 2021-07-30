<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\File;

class ResumesController extends Controller {
  public function view($id) {
    $file = storage_path('app/resumes/') . $id . '.pdf';

    if (file_exists($file)) {

      $headers = [
        'Content-Type' => 'application/pdf'
      ];

      return response()->download($file, 'Test File', $headers, 'inline');
    } else {
      abort(404, 'File not found!');
    }
  }
}
