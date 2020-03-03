var gulp = require('gulp');
var sass = require('gulp-sass');
const image = require('gulp-image');
var replace = require('gulp-batch-replace');
var rename = require("gulp-rename");

const CONFIG = require('./config.json');

sass.compiler = require('node-sass');

let global_assets_array = CONFIG.global.assets.copy.concat(CONFIG.global.assets.exclude);
let global_vendor_array = CONFIG.global.vendor.copy.concat(CONFIG.global.vendor.exclude);

//software
let software_copy_images=CONFIG.software.copy_images;
let software_replace_array_html = CONFIG.software.replace_images.html;
let software_replace_array_css_and_scss = CONFIG.software.replace_images.cssAndScss;

//event
let event_copy_images=CONFIG.event.copy_images;
let event_replace_array_html = CONFIG.event.replace_images.html;
let event_replace_array_css_and_scss = CONFIG.event.replace_images.cssAndScss;


//travel
let travel_copy_images=CONFIG.travel.copy_images;
let travel_replace_array_html = CONFIG.travel.replace_images.html;
let travel_replace_array_css_and_scss = CONFIG.travel.replace_images.cssAndScss;

gulp.task('generate_build', function() {

    //global assets copy files
    gulp.src(global_assets_array).pipe(gulp.dest('./build/assets/'));

    //global vendor copy files
    gulp.src(global_vendor_array).pipe(gulp.dest('./build/vendor/'));
    
    
    //software copy image files
    gulp.src(software_copy_images).pipe(gulp.dest('./build/assets/img/software/'));

    //software replace html images
    gulp.src("./software.html").pipe(replace(software_replace_array_html)).pipe(gulp.dest('./build/'));

    //software replace css images
    gulp.src("./assets/css/software.css").pipe(replace(software_replace_array_css_and_scss)).pipe(gulp.dest('./build/assets/css/'));

    //software minified replace css images
    gulp.src("./assets/css/software.min.css").pipe(replace(software_replace_array_css_and_scss)).pipe(gulp.dest('./build/assets/css/'));

    //software replace scss images
    gulp.src("./assets/scss/software.scss").pipe(replace(software_replace_array_css_and_scss)).pipe(gulp.dest('./build/assets/scss/'));


    //travel copy image files
    gulp.src(travel_copy_images).pipe(gulp.dest('./build/assets/img/travel/'));

    //travel replace html images
    gulp.src("./travel.html").pipe(replace(travel_replace_array_html)).pipe(gulp.dest('./build/'));

    //travel replace css images
    gulp.src("./assets/css/travel.css").pipe(replace(travel_replace_array_css_and_scss)).pipe(gulp.dest('./build/assets/css/'));

    //travel minified replace css images
    gulp.src("./assets/css/travel.min.css").pipe(replace(travel_replace_array_css_and_scss)).pipe(gulp.dest('./build/assets/css/'));

    //travel replace scss images
    gulp.src("./assets/scss/travel.scss").pipe(replace(travel_replace_array_css_and_scss)).pipe(gulp.dest('./build/assets/scss/'));



    //event copy image files
    gulp.src(event_copy_images).pipe(gulp.dest('./build/assets/img/event/'));

    //event replace html images
    gulp.src("./event.html").pipe(replace(event_replace_array_html)).pipe(gulp.dest('./build/'));

    //event replace css images
    gulp.src("./assets/css/event.css").pipe(replace(event_replace_array_css_and_scss)).pipe(gulp.dest('./build/assets/css/'));

    //event minified replace css images
    gulp.src("./assets/css/event.min.css").pipe(replace(event_replace_array_css_and_scss)).pipe(gulp.dest('./build/assets/css/'));

    //event replace scss images
    gulp.src("./assets/scss/event.scss").pipe(replace(event_replace_array_css_and_scss)).pipe(gulp.dest('./build/assets/scss/'));


});

gulp.task('image_compress', function () {
    gulp.src('./assets/img/**/*')
        .pipe(image())
        .pipe(gulp.dest('./compress/'));
});

gulp.task('image_single_compress', function () {
    gulp.src('./assets/img/single/**/*')
        .pipe(image())
        .pipe(gulp.dest('./compress/'));
});


gulp.task('sass', function () {
    gulp.src('./assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));

    //minify
    gulp.src('./assets/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./assets/scss/**/*.scss', ['sass']);
});

gulp.task('default', [ 'generate_build' ]);
