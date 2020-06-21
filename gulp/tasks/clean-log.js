var config = require("../config.js");
var del = require("del");
var clean;

clean = async function() {
    await del("./**/*", {cwd: config.path.log});
}

module.exports = clean;




//gulp4.0に対応の為変更
//var gulp = require("gulp");
//gulp.task("clean-log", () => {
//    return del("./**/*",{cwd: config.path.log});
//})