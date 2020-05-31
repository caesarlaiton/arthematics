const gulp = require("gulp"),
	log = require("fancy-log"),
	critical = require("critical").stream;

gulp.task("critical", () => {
  return gulp
    .src("public/**/*.html")
    .pipe(critical({
      base: "./",
      inline: true,
      css: [
        "public/css/style.css"
      ],
			dimensions: [
					{height: 768, width: 1366}
			],
			minify: true
    }))
    .on("error", err => {
      log.error(err.message);
    })
    .pipe(gulp.dest("public"));
});
