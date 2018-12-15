module.exports = function gruntConfig(grunt) {
  require('load-grunt-tasks')(grunt);

  var files = ['gruntfile.js', 'index.js', 'test/**/*.js', 'lib/**/*.js'];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    babel: {
      options: {
        sourceMap: true,
      },
      dist: {
        files: {
          'lib/meta-object.js': 'src/meta-object.js',
          'test/test.spec.js': 'src/test.spec.js',
          'test/meta-object.js': 'src/meta-object.js',
        },
      },
    },

    eslint: {
      target: files,
    },

    mochaTest: {
      src: ['test/**/*.js'],
      options: {
        reporter: 'spec',
        require: ['babel/register', 'should'],
      },
    },

    watch: {
      scripts: {
        files: files,
        tasks: ['eslint'],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.registerTask('default', ['babel']);
  grunt.registerTask('test', ['eslint', 'babel', 'mochaTest']);
};
