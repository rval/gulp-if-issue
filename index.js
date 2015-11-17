
/**
 * Reproduction steps:
 *
 *  1) Run “gulp watch” from the command line.
 *  2) Make changes to this file. Notice the watch callback executes as expected.
 *  3) Now add a syntax error to index.js.
 *  4) Gulp Plumber logs the error to the console.
 *  5) Fix the syntax error in index.js.
 *  6) Notice that the gulp-watch callback executes, but index.js is no longer transformed by Babel.
 *  7) Remove gulp-if from gulpfile.js and retry all of the above steps.
 *  8) Notice that Babel continues to build files after correcting the syntax error.
 */

console.log('this is index.js'); 

// Uncomment for a syntax error:
// ^