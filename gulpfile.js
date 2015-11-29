var gulp = require('gulp');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
var jade = require('gulp-jade');
var gutil = require('gulp-util');
var del = require('del');
var less = require('gulp-less');
var lessPluginCleanCSS = require('less-plugin-clean-css');
var lessPluginAutoPrefix = require('less-plugin-autoprefix');
var bowerFiles = require('main-bower-files');
var runSequence = require('run-sequence');

gulp.task('clean', function() {
    return del(['build/*']);
});

gulp.task('vendor', function() {
    return gulp.src(bowerFiles(), { base: 'bower_components' })
        .pipe(gulp.dest('build/vendor'));
});

gulp.task('assets', function() {
    gulp.src('src/assets/**/*')
    .pipe(gulp.dest('build/assets'));
});

gulp.task('scripts', function() {
    gulp.src(['src/coffee/**/*.coffee'])
        .pipe(coffee().on('error', function(err) {
            gutil.log(gutil.colors.red(err));
        }))
        .pipe(gulp.dest('build/js'));
});

gulp.task('styles', function () {
  var cleancss = new lessPluginCleanCSS({ advanced: true, compatibility: 'ie9' });
  var autoprefix = new lessPluginAutoPrefix({ browsers: ["last 2 versions"] });

  gulp.src(['style.less'], {cwd: 'src/less'})
    .pipe(less({
      paths: 'src/less',
      plugins: [autoprefix, cleancss]
    }))
    .pipe(gulp.dest('build/css'));
});

gulp.task('content', function() {
    gulp.src(['src/jade/**/*.jade', '!src/jade/layouts/**'])
        .pipe(jade().on('error', function(err) {
            gutil.log(gutil.colors.red(err));
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
    gulp.watch('src/coffee/**', ['scripts']);
    gulp.watch('src/less/**', ['styles']);
    gulp.watch('src/jade/**', ['content']);
    gulp.watch('src/assets/**', ['assets']);
});

gulp.task('default', ['build', 'watch']);
gulp.task('build', function(callback) {
    runSequence('clean', ['vendor', 'scripts', 'assets', 'styles', 'content'],
        callback);
});
