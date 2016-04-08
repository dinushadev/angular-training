"use strict";

var browserSync = require("browser-sync").create();

browserSync.init({
    files: ["app/css/*.css","app/js/**/*.*","app/*.html", "app/partials/**/*.html"],
    server: {
        baseDir: "app"
    }
});