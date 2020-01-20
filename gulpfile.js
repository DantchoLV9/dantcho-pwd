var gulp = require("gulp");
var less = require("gulp-less");
let cleanCSS = require("gulp-clean-css");

gulp.task("less", function(cb) {
	gulp
		.src("./less/style.less")
		.pipe(less())
		.pipe(
			cleanCSS({ debug: true, compatibility: "ie8" }, details => {
				console.log(`${details.name}: ${details.stats.originalSize}`);
				console.log(`${details.name}: ${details.stats.minifiedSize}`);
			})
		)
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
