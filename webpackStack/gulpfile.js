var gulp=require("gulp");
var gutil = require('gulp-util');
var webpack=require("webpack");
var minimist=require("minimist");

const SRC="./src/"
const DEST="./dist/";




//依赖jshint  jshint-stylish 和 gulp-jshint
gulp.task("hint",function(){
    var jshint=require("gulp-jshint");
    var stylish=require("jshint-stylish");
    gulp.src(["!"+SRC+"js/plugins/***.js",SRC+"js/page/***.js"])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
});

//会清空dist目录下的所有文件 使用时候要注意
gulp.task('clean', ['hint'], function () {
    // console.log(process.argv.slice(1));
    var clean = require('gulp-clean');
    return gulp.src(DEST+"***", {read: true}).pipe(clean())
});


// var webpackConfig=require("./webpack.config");
// var webpackConfigDev=require("./webpack.config.dev");


gulp.task('pack', ['clean'], function (done) {
    var env=process.argv[4];//dev 或者production
    console.log(process.argv,"env:"+env);
    var _conf;
    if(env=="dev"){
    	_conf=require("./webpack.config.dev");
    }
    else{
    	_conf=require("./webpack.config.prod")
    }
    webpack(_conf, function (err, stats) {
        if (err) throw new gutil.PluginError('webpack', err)
        gutil.log('[webpack]', stats.toString({colors: true}))
        done()
    });
});

gulp.task('watch', function (done) {
    var _conf =webpackConfigDev;
    gulp.watch(SRC+"***",["pack"]);
});



var remoteServer = {
    host: '121.196.201.74',
    remotePath: '/dist/',
    user: 'root',
    pass: '123456',
    port:21
};

gulp.task('deploy', function () {
    var ftp = require('gulp-ftp');
    var _conf = remoteServer ;
    return gulp.src(process.cwd() + '/dist/**')
        .pipe(ftp(_conf))
        .pipe(gutil.noop());
});

