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
//js 方法的第二个参数可以用来自定义生成的 JS 文件的输出目录。
mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css').version();;
