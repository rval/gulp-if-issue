
/**
 * Reproduction steps:
 *
 *  1) Run “gulp watch” from the command line.
 *  2) Make changes to index.js. Notice the watch callback executes as expected.
 *  3) Add a syntax error to index.js. Babel produces an error, which is logged by Gulp Plumber.
 *  4) Fix the syntax error in index.js and save the file.
 *  5) Notice the watch callback continues to execute, but index.js is no longer transformed by Babel.
 *
 * If gulp-if is removed from the stream, Babel continues to build files after syntax errors. 
 */

console.log('this is index.js');

// Uncomment for a syntax error:
//^