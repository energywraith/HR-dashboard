const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/pages/dashboard/index.js', 'public/js/dashboard.js')
    .react()
    .js('resources/js/pages/landingPage/index.js', 'public/js/landingPage.js')
    .sass('resources/sass/app.scss', 'public/css');
