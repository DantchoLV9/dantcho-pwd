var gulp = require("gulp");
var less = require("gulp-less");
var cleanCSS = require("gulp-clean-css");
var minify = require("gulp-minify");

gulp.task("less", function(cb) {
	gulp
		.src("./less/style.less")
		.pipe(less())
		.pipe(gulp.dest("./css"));
	cb();
});

gulp.task(
	"default",
	gulp.series("less", function(cb) {
		gulp.watch("./less/*.less", gulp.series("less"));
		cb();
	})
);

gulp.task("build-css", function(cb) {
	gulp
		.src("./css/*.css")
		.pipe(
			cleanCSS({ debug: true, compatibility: "ie8" }, details => {
				console.log(`${details.name}: ${details.stats.originalSize}`);
				console.log(`${details.name}: ${details.stats.minifiedSize}`);
			})
		)
		.pipe(gulp.dest("./output/css"));
	cb();
});

gulp.task("build-js", function(cb) {
	gulp
		.src("./js/*.js")
		.pipe(minify())
		.pipe(gulp.dest("./output/js"));
	cb();
});

gulp.task("build", function(cb) {
	gulp.series("build-css", "build-js");
	cb();
});
