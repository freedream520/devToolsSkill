var gulp=require("gulp");

var remoteServer = {
    host: '121.196.201.74',
    remotePath: '/',
    user: 'root',
    // pass: '123456',
    port:21
};



gulp.task('deploy', function () {
    var sftp = require('gulp-sftp');
    var _conf = remoteServer ;
    console.log(process.cwd() + '/dist/');
    return gulp.src(process.cwd() + '/dist/**')
        .pipe(sftp(_conf))
})