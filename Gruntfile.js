/*global module:false*/
module.exports = function(grunt) {

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
      lib_test: {
        files: ['js/main.js'],
        tasks: ['uglify']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['uglify']);

};
