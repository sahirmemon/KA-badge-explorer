var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon');

gulp.task('browserify', function() {
	gulp.src('js/main.js') 
        .pipe(browserify({transform: 'reactify'}))
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
	gulp.src('index.html')
        .pipe(gulp.dest('dist')),
    gulp.src('css/*.css')
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
	gulp.watch('**/*.*', ['browserify', 'copy']);
});

gulp.task('develop', function() {
    nodemon({
        script: 'server.js', 
        ext: 'html js',
        env: {
            'NODE_ENV': 'development'
        },
        ignore: ['dist']
    })
//    .on('start', ['watch'])
    .on('change', ['browserify', 'copy'])
    .on('restart', function() {
        console.log('restarted!');
    })
})

gulp.task('default', ['browserify', 'copy', 'develop']);