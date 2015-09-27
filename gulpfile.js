var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');
var tslint = require('gulp-tslint');
var tsProject = tsc.createProject('tsconfig.json');
var config = require('./gulp.config')();
var nodemon = require('gulp-nodemon');


var browserSync = require('browser-sync');
var superstatic = require('superstatic');

gulp.task('ts-lint', function() {
	return gulp.src(config.allTs)
		.pipe(tslint())
		.pipe(tslint.report('prose', {
			emitError: false
		}))
})

gulp.task('compile-ts', function() {
	var sourceTsFiles = [
		config.allTs,
		config.typings	
	];
	
	var tsResult = gulp
		.src(sourceTsFiles)
		.pipe(sourcemaps.init())
		.pipe(tsc(tsProject));
		
	return tsResult.js
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.tsOutputPath));
});

gulp.task('serve', ['ts-lint', 'compile-ts'], function() {

    gulp.watch([config.allTs], ['ts-lint', 'compile-ts']);
	
	browserSync({
		port: 3000,
    files: ['index.html', '**!/!*.js'],
    injectChanges: true,
    logFileChanges: false,
    logLevel: 'silent',    
    notify: true,
    reloadDelay: 0.1,
    server: {
      baseDir: './public',
       // middleware: superstatic({ debug: false})
    }
	});
	
});

gulp.task('browser-sync', ['nodemon'], function() {

    gulp.watch([config.allTs], ['ts-lint', 'compile-ts']);

    browserSync.init(null, {
        proxy: "http://localhost:3000",
        files: ["public/**/app.js"],
        browser: "google chrome",
        port: 3000,
    });

    /*browserSync.init(null, {
        //proxy: "http://localhost:3000",
        files: ['index.html', '**!/!*.js'],
        injectChanges: true,
        logFileChanges: true,
        browser: "google chrome",
        notify: true,
        port: 3000,
        server: {
            baseDir: './public',
            middleware: nodemon
        }
    });*/

});
gulp.task('nodemon', function (cb) {

    var started = false;

    return nodemon({
        script: './bin/www'
    }).on('start', function () {
        // to avoid nodemon being started multiple times
        // thanks @matthisk
        if (!started) {
            cb();
            started = true;
        }
    });
});

gulp.task('default', ['browser-sync']);
