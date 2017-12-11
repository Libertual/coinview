const gulp = require('gulp'),
      ts   = require('gulp-typescript'),
      nodemon = require('gulp-nodemon');

const JSON_FILES = ['src/*.json', 'src/**/*.json'];

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('build', () => {
  const tsResult = tsProject.src()
  .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.ts', ['build']);
});

gulp.task('assets', function() {
  return gulp.src(JSON_FILES)
  .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['watch'], function () {

    nodemon({
        script: './dist/daemon',
        ext: 'js',
    }).on('restart', function () {
        setTimeout(function () {
            console.log("reload!");
        }, 500);
    });

});

gulp.task('default', ['serve', 'assets']);
