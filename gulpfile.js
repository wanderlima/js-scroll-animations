const path = require("path");

const fs = require("fs-extra");
const gulp = require("gulp");
const rename = require("gulp-rename");
const minify = require("gulp-minify");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass")(require("sass"));
const browserify = require("browserify");
const log = require("gulplog");
const tap = require("gulp-tap");
const buffer = require("gulp-buffer");
const uglify = require("gulp-uglify");
var argv = require("yargs").argv;

const SRC_PATH = path.join(__dirname, "src");
const BUILD_PATH = path.join(__dirname, "dist");

function clean(cb) {
  fs.emptyDirSync(BUILD_PATH);
  cb();
}

function cssBuild() {
  let options;

  if (argv.development) {
    options = {
      outputStyle: "expanded",
    };
  } else {
    options = {
      outputStyle: "compressed",
    };
  }

  return gulp
    .src(SRC_PATH + "/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass(options).on("error", sass.logError))
    .pipe(
      autoprefixer(
        "last 2 version",
        "safari 5",
        "ie 8",
        "ie 9",
        "opera 12.1",
        "ios 6",
        "android 4"
      )
    )
    .pipe(sourcemaps.write("."))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(BUILD_PATH));
}

// function jsBuild() {
//   return (
//     gulp
//       .src("src/**/*.js", { read: false })
//       .pipe(
//         tap(function (file) {
//           log.info("bundling " + file.path);
//           file.contents = browserify(file.path, { debug: true }).bundle();
//         })
//       )
//       .pipe(buffer())
//       .pipe(sourcemaps.init({ loadMaps: true }))
//       // .pipe(uglify())
//       .pipe(
//         minify({
//           ext: {
//             min: ".min.js",
//           },
//           noSource: true,
//         })
//       )
//       .pipe(sourcemaps.write("."))
//       .pipe(rename({ suffix: ".min" }))
//       .pipe(gulp.dest(BUILD_PATH))
//   );
// }

function jsBuild(cb) {
  return gulp
    .src(SRC_PATH + "/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(
      minify({
        ext: {
          min: ".min.js",
        },
        noSource: true,
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(BUILD_PATH));
}

function watch() {
  gulp.watch(SRC_PATH + "/**/*.scss", cssBuild);
  gulp.watch(SRC_PATH + "/**/*.js", jsBuild);
}

exports.clean = clean;
exports.watch = watch;

exports.build = gulp.series(clean, gulp.parallel(cssBuild, jsBuild));
