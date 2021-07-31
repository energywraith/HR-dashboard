<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title> Apply for {{ $position->name }} </title>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('css/applicationForm.css') }}" rel="stylesheet">
        <link rel="shortcut icon" href="{{ asset('images/brand-image.svg') }}" type="image/x-icon">
    </head>
    <body class="antialiased d-flex flex-column container p-0">
        <header class='header w-100 text-light p-5'>
            <h1 class='display-3'> {{ $position->name }} </h1>
            <ul class='d-flex flex-column flex-md-row mt-3'>
                @if ($position->location)
                    <li>
                        <b> Location: </b> {{ $position->location }}
                    </li>
                @endif
                <li>
                    @if ($position->seniority != 'All')
                        <b> Seniority: </b> {{ $position->seniority }}
                    @else
                        All seniority levels are welcome
                    @endif
                </li>
                <li>
                    @if ($position->salary_range->from)
                        <b> Salary: </b>
                        {{ $position->salary_range->from }} {{ $position->salary_range->currency }}
                        -
                        {{ $position->salary_range->to }} {{ $position->salary_range->currency }}
                    @else
                        Undisclosed salary
                    @endif
                </li>
            </ul>
        </header>
        <main class='flex-grow-1 d-flex flex-column bg-light px-5 py-4'>
            <section>
                <p> {{ $position->description }} </p>
                <hr />

                @if ($position->responsibilities)
                    <h3 class='h5 font-weight-bold'> You will be responsible for: </h3>
                    <ul class='pl-4 py-2 list'>
                        @foreach ($position->responsibilities as $responsibility)
                            <li> {{ $responsibility }} </li>
                        @endforeach
                    </ul>
                @endif

                @if ($position->expectations)
                    <h3 class='h5 font-weight-bold pt-3'> We expect you to: </h3>
                    <ul class='pl-4 py-2 list'>
                        @foreach ($position->expectations as $expectation)
                            <li> {{ $expectation }} </li>
                        @endforeach
                    </ul>
                @endif

                @if ($position->nice_to_have)
                    <h3 class='h5 font-weight-bold pt-3'> Nice to have: </h3>
                    <ul class='pl-4 py-2 list'>
                        @foreach ($position->nice_to_have as $nice_to_have_item)
                            <li> {{ $nice_to_have_item }} </li>
                        @endforeach
                    </ul>
                @endif

                @if ($position->benefits)
                    <h3 class='h5 font-weight-bold pt-3'> Benefits: </h3>
                    <ul class='pl-4 py-2 list'>
                        @foreach ($position->benefits as $benefit)
                            <li> {{ $benefit }} </li>
                        @endforeach
                    </ul>
                @endif
            </section>
            <section class='pt-4 d-flex flex-column'>
                <h3 class='h2 font-weight-bold'> Apply now! </h3>
                <form method="POST" enctype="multipart/form-data" action="{{ route('send_application') }}" class='col-12 mt-3 p-0 d-flex flex-column'>
                    @csrf
                    <input type="hidden" name="position" value="{{ $position }}" />
                    @foreach ($form_fields as $field)
                        <div class='form-group'>
                            <label for="{{ $field['key'] }}"> {{ $field['label'] }} </label>
                            <input type="{{ $field['type'] }}"
                            id="{{ $field['key'] }}"
                            name="{{ $field['key'] }}"
                            class="form-control @if ($field['type'] === 'file') p-0 h-100 @endif @error($field['key']) is-invalid @enderror"
                            value="{{ old($field['key']) }}"
                            >
                            @error($field['key'])
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    @endforeach
                    <button type='submit' class='btn btn-primary align-self-end py-2 px-4 mt-3'> Submit application </button>
                </form>
            </section>
        </main>
    </body>
</html>
