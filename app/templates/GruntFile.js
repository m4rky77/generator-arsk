// Gruntfile with the configuration of grunt-express and grunt-open. No livereload yet!
module.exports = function(grunt) {
 
  // Load Grunt tasks declared in the package.json file
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


  // Configure Grunt 
  grunt.initConfig({
 
    // grunt-express will serve the files from the folders listed in `bases`
    // on specified `port` and `hostname`
    express: {
      all: {
        options: {
          port: 9000,
          hostname: "0.0.0.0",
          bases: ['app'],
          livereload: true
        }
      }
    },
 
    // grunt-watch will monitor the projects files
    watch: {
      all: {
        files: ['app/index.html', 'app/**/*.js', 'app/**/*.css', 'app/**/*.html'],
        options: {
          livereload: true
        }
      }
    },
 
    // grunt-open will open your browser at the project's URL
    open: {
      all: {
        // Gets the port from the connect configuration
        path: 'http://localhost:<%= express.all.options.port%>'
      }
    },

    jshint: {
      options: {
        // options here to override JSHint defaults
        boss    : true,  // Suppress warnings about assignments where comparisons are expected
        browser : true,  // Define globals exposed by modern browsers (`document`, `navigator`)
        curly   : false, // Require curly braces around blocks
        devel   : false, // Define `console`, `alert`, etc. (poor-man's debugging)
        eqeqeq  : false, // Prohibit the use of `==` and `!=` in favor of `===` and `!==`
        eqnull  : true,  // Suppress warnings about `== null` comparisons
        immed   : true,  // Prohibit the use of immediate function invocations w/o wrapping in parentheses
        latedef : true,  // Prohibit the use of a var before it's defined
        laxbreak: true,  // Suppress warnings about possibly unsafe line breaks
        newcap  : true,  // Require you to capitalize names of constructor functions
        noarg   : true,  // Prohibit the use of `arguments.caller` and `arguments.callee`
        shadow  : true,  // Suppress warnings about var shadowing (declaring a var that's declared somewhere in outer scope)
        sub     : true,  // Suppress warnings about using `[]` notation, e.g. `person['name']` vs. `person.name`
        trailing: true,  // Trailing whitespace = error
        undef   : false, // Prohibit the use of explicitly undeclared variables
        unused  : false, // Warn when you define and never use your variables
        white   : false, // Check JS against Douglas Crawford's coding style
        jquery  : true,  // Define globals exposed by jQuery
        // Define global functions/libraries/etc.
        globals : {
            amplify : true
        }
      },
      all: [
        'app/js/app/**/*.js',
        'app/js/main.js'
      ]  // <--- note this is empty! We'll fill it up as we read require dependencies
    } 

  });
 
  // Creates the `server` task
  grunt.registerTask('server', [
    'jshint',
    'express',
    'open',
    'watch'
  ]);
};