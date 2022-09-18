import gulp from "gulp";
import rename from "gulp-rename";
import imagemin from "gulp-imagemin";
import webp from "gulp-webp";
import svgstore from "gulp-svgstore";
import del from "del";

const svgo = () => {
  return gulp
    .src("source/img/**/*.{svg}")
    .pipe(
      imagemin([
        imagemin.svgo({
          plugins: [
            { removeViewBox: false },
            { removeRasterImages: true },
            { removeUselessStrokeAndFill: false },
          ],
        }),
      ])
    )
    .pipe(gulp.dest("source/img"));
};

const sprite = () => {
  return gulp
    .src("source/img/sprite/*.svg")
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename("sprite_auto.svg"))
    .pipe(gulp.dest("build/img"));
};

const optimizeImages = () => {
  return gulp
    .src("build/img/**/*.{png,jpg}")
    .pipe(
      imagemin([
        imagemin.optipng({ optimizationLevel: 3 }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
      ])
    )
    .pipe(gulp.dest("build/img"));
};
const createWebp = () => {
  const pathToSrc = "src/assets/img/";
  const pathToPublic = "public/img/";

  const root = "";
  return gulp
    .src(`${pathToPublic}${root}**/*.{png,jpg}`)
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest(`${pathToPublic}${root}`));
};
const clean = () => {
  return del("build");
};

export { optimizeImages };
export { createWebp };
