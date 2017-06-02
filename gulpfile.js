var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');


gulp.task('default', function () {
    gulp.start('server');
});

gulp.task('server', function() {
    gulp.watch(['client/**/*.js', 'server/**/*.js']).on('change', function(event){
        gulp.src(event.path)
            .pipe(jshint())
            .pipe(jshint.reporter(jshintStylish));
    });
});
