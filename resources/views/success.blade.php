<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title> Applied for {{ $position }} </title>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('css/applicationForm.css') }}" rel="stylesheet">
        <link rel="shortcut icon" href="{{ asset('images/brand-image.svg') }}" type="image/x-icon">
    </head>
    <body class="antialiased d-flex flex-column align-items-center container p-0 bg-light">
      <header class='header w-100 text-light p-5'>
        <h1 class='display-3'> {{ $position }} </h1>
      </header>
      <section class='bg-white flex-grow-1 d-flex flex-column align-items-center w-100 pt-5'>
        <h2 class='h1 text-center'>
          Your application for position {{ $position }} has been successfully sent. <br>
          We can't wait to review your application.
        </h2>
        <img src="{{ asset('images/success.svg') }}" alt="success" class='pt-5 w-25' />
      </section>
    </body>
</html>