var config = require("../config.js");
var { src, dest, series, parallel} = require("gulp");       //gulp4.0にて追加
var del = require("del");
var clean, copy;

clean = async function () {
    await del("./images/**/*",{ cwd: config.path.output});
};

copy = function () {
    return src("./images/**/*", { cwd: config.path.input})
        .pipe(dest("./images", { cwd: config.path.output}));
}

module.exports = series(clean, copy);





//gulp4.0に対応するため変更
//var gulp = require("gulp");
//
//gulp.task("copy-images.clean", () => {
//    return del("./**/*",{cwd: config.path.output});
//})
//
//gulp.task("copy-images", ["copy-images.clean"], () =>{
//    gulp.src("./images/**/*", { cwd: config.path.input})
//        .pipe(gulp.task.dest("./images", { cwd: config.path.output}));
//});