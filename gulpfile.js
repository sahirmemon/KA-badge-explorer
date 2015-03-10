var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon');
var less = require('gulp-less');
var cssmin = require('gulp-minify-css');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var del = require('del');
var package = require('./package.json');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('clean', function(cb) {
  del(['dist'], cb);
});

gulp.task('less', function() {
  gulp.src(package.paths.less)
    .pipe(less())
    .pipe(concat(package.dest.style))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(package.dest.dist.css));
});

gulp.task('less:min', function() {
  gulp.src(package.paths.less)
    .pipe(less())
    .pipe(concat(package.dest.style))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(gulp.dest(package.dest.dist.css));
});

gulp.task('lint', function() {
  gulp.src(package.paths.js)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('js', function() {
  gulp.src(package.paths.app) 
    .pipe(browserify({transform: 'reactify', debug: 'true'}))
    .pipe(concat(package.dest.app))
    .pipe(gulp.dest(package.dest.dist.js));
});

gulp.task('js:min', function() {
  gulp.src(package.paths.app)
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat(package.dest.app))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(package.dest.dist.js));
});

gulp.task('copy', function() {
  gulp.src(package.paths.html)
    .pipe(gulp.dest(package.dest.dist.home));
  gulp.src(package.paths.frameworks_css)
    .pipe(gulp.dest(package.dest.dist.css));
  gulp.src(package.paths.frameworks_js)
    .pipe(gulp.dest(package.dest.dist.js));
  gulp.src(package.paths.images)
    .pipe(gulp.dest(package.dest.dist.img));
});

gulp.task('watch', function() {
  gulp.watch('**/*.*', ['browserify', 'copy']);
});

gulp.task('develop', function() {
  nodemon({
    script: 'server.js', 
    ext: 'html js less',
    env: {
      'NODE_ENV': 'development'
    },
    ignore: ['dist']
  })
  .on('change', ['js', 'copy', 'less'])
  .on('restart', function() {
    console.log('restarted!');
  })
})

gulp.task('serve', function() {
  nodemon({
    script: 'server.js', 
    ext: 'html js',
    env: {
      'NODE_ENV': 'PRODUCTION'
    },
    ignore: ['dist']
  })
  .on('start', ['lint', 'less:min', 'js:min']);
})

gulp.task('default', ['js', 'copy', 'less', 'develop']);