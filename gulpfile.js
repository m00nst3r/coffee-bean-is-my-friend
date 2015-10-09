/**
 * Created by user on 09/10/15.
 */

var gulp = require('gulp');
var twig = require('gulp-twig');
gulp.task('compile', function(){
   return gulp.src('./index.twig')
       .pipe(twig({
           data: {
               title: 'Gulp and Twig',
               benefits: [
                   'Fast',
                   'Flexible',
                   'Secure'
               ]
           }
       }))
       .pipe(gulp.dest('./'));
});

gulp.task('default', ['compile']);