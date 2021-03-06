const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const rename = require("gulp-rename");
const csso = require("gulp-csso");
const webp = require("gulp-webp");
const imagemin = require("gulp-imagemin");
const del = require("del");

// Styles

const styles = () => {
    return gulp.src("source/sass/style.scss")
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(csso())
        .pipe(rename("style.min.css"))
        .pipe(sourcemap.write("."))
        .pipe(gulp.dest("build/css"))
        .pipe(sync.stream())
}
exports.styles = styles;


const html = () => {
    return gulp.src("source/*.html")
        .pipe(gulp.dest("./build"))
        .pipe(sync.stream());
}
exports.html = html;

// Server

const server = done => {
    sync.init({
        server: {
            baseDir: "./build"
        },
        cors: true,
        notify: false,
        ui: false,
    });
    done();
}
exports.server = server;

//Watcher

const watcher = () => {
    gulp.watch("source/sass/**/*.scss", gulp.series("styles"));
    gulp.watch("source/*.html", gulp.series("html"));
}
exports.default = gulp.series(styles, html, server, watcher);

// Webp image

const createWebp = () => {
    return gulp.src("source/img/**/*.{png,jpg}")
        .pipe(webp({ quality: 90 }))
        .pipe(gulp.dest("source/img"))
}
exports.createWebp = createWebp;

// Imagemin

const images = () => {
    return gulp.src("source/img/**/*.{jpg,png,svg}")
        .pipe(imagemin([
            imagemin.optipng({ optimizationLevel: 3 }),
            imagemin.mozjpeg({ progressive: true }),
            imagemin.svgo()
        ]))
}
exports.images = images;

// Copy in docs

const copy = () => {
    return gulp.src([
            "source/img/**",
            "source/js/**",
            "source/*.ico",
            "source/*.html"
        ], {
            base: "source"
        })
        .pipe(gulp.dest("build"))
}
exports.copy = copy;

// clean docs

const clean = () => {
    return del("build")
}
exports.clean = clean;

const build = gulp.series(clean, copy, styles, images, html);
exports.build = build;
// Start
exports.start = gulp.series(build, server, watcher);