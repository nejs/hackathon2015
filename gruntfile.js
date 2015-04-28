module.exports = function(grunt) {

  var task = grunt.task;
  var file = grunt.file;
  var log = grunt.log;
  var verbose = grunt.verbose;
  var fail = grunt.fail;
  var option = grunt.option;
  var config = grunt.config;
  var template = grunt.template;
  var _ = grunt.util._;

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: false,
        newcap: false,
        noarg: true,
        sub: true,
        undef: false,
        boss: true,
        eqnull: true,
        node: true,
        strict: false,
        esnext: true,
        globals: {
          exports: true,
          document: true,
          $: true,
          Radar: true,
          WeakMap: true,
          window: true,
          copy: true
        }
      },
      files: {
        src: [
          'gruntfile.js',
          '*.js',
          'src/js/*.js',
        ]
      }
    },
    csslint: {
      strict: {
        src: ['css/*.css']
      },
      lax: {
        options: {
          csslintrc: '.csslintrc'
        },
        src: ['src/css/*.css']
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['node_modules/scrollreveal/dist/scrollReveal.min.js',
          'node_modules/velocity-animate/velocity.min.js',
          'src/js/main.js'],
        dest: 'js/js.js',
      },
    },
    uglify: {
      options: {
        mangle: false
      },
      dist: {
        files: {
          'js/js.js': ['js/js.js']
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      dist: {
        files: {
          'css/style.css': ['src/css/style.css']
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src/img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img/'
        }]
      }
    },
    watch: {
      scripts: {
        files: ['src/js/*.js'],
        tasks: ['concat:dist', 'uglify:dist']
      },
      css: {
        files: ['src/css/*.css'],
        tasks: ['cssmin:dist']
      },
    },
  });


  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'concat:dist', 'uglify:dist', 'csslint:lax', 'cssmin:dist', 'imagemin']);
  grunt.registerTask('test', ['jshint', 'csslint:lax']);
  grunt.registerTask('build', ['concat:dist', 'uglify:dist', 'cssmin:dist', 'imagemin']);
  


};
