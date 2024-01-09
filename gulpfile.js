const { series, dest, src } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const spawn = require('cross-spawn')
const browserSync = require('browser-sync').create()

function styles() {
  return src('./assets/app.scss')
    .pipe(sass())
    .pipe(postcss())
    .pipe(dest('./_site/assets/'))
}
exports.styles = series(styles)