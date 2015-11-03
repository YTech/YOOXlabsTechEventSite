/*global module:false*/
module.exports = function(grunt) {

  var mozjpeg = require('imagemin-mozjpeg');

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    uglify: {
      options: {
        sourceMap: true
      },
      dist: {
        src: ['js/main.js'],
        dest: 'js/main.min.js'
      }
    },
    watch: {
      lib: {
        files: ['js/main.js'],
        tasks: ['uglify']
      },
      img: {
        files: ['img/**/*.{png,jpg,gif}'],
        tasks: ['imagemin']
      }
    },
    imagemin: {                          // Task
      dynamic: {                         // Another target
        options: {                       // Target options
          optimizationLevel: 3,
          svgoPlugins: [{ removeViewBox: false }],
          use: [mozjpeg()]
        },
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'img/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'img_optim/'             // Destination path prefix
        }]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task.
  grunt.registerTask('default', ['imagemin', 'uglify']);

};
