module.exports = function (grunt) {

  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    coffeelint: {
      app: ['app/assets/javascripts/**/*.coffee', 'app/components/**/*.coffee'],
      options: {
        configFile: '.coffee-lint.json'
      }
    },

    scsslint: {
      options: {
        config: '.scss-lint.yml',
        bundleExec: true,
        colorizeOutput: true,
        compact: true
      },
      app: ['app/assets/stylesheets/**/*.scss', 'app/components/**/*.scss']
    },

    svgstore: {
      options: {
        cleanup: ['fill'],
        svg: {
          id: 'icons',
          class: 'icons'
        },
        inheritviewbox: true
      },
      icons: {
        files: {
          'app/assets/images/icons.svg': 'app/assets/images/icons/**/*.svg'
        }
      }
    },
    
    handlebars: {
      compile: {
        options: {
          namespace: 'App.Templates',
          processName: function processName(filePath) {
            var noExt = filePath.replace('.hbs', '');
            var noComp = noExt.replace('app/components/', '');
            return noComp.replace('app/assets/javascripts/templates/', '');
          },
          processPartialName: function processPartialName(filePath) {
            var noExt = filePath.replace('.hbs', '');
            var noComp = noExt.replace('app/components/', '');
            return noComp.replace('app/assets/javascripts/templates/', '');
          },
        },
        files: {
          'app/assets/javascripts/templates.js': [
            'app/assets/javascripts/templates/*.hbs',
            'app/components/**/*.hbs'
          ]
        }
      }
    },

    watch: {
      sass: {
        files: [
          'app/assets/stylesheets/**/*.scss',
          'app/components/**/*.scss'
        ],
        tasks: ['scsslint']
      },
      handlebars: {
        files: [
          'app/assets/javascripts/templates/*.hbs',
          'app/components/**/*.hbs'
        ],
        tasks: ['handlebars']
      },
      coffee: {
        files: [
          'app/assets/javascripts/**/*.coffee',
          'app/components/**/*.coffee'
        ],
        tasks: ['coffeelint']
      },
      icons: {
        files: ['app/assets/images/icons/**/*.svg'],
        tasks: ['svgstore'],
      }
    },

  });

  grunt.registerTask('build', [
    'handlebars',
    'lint',
    'svgstore',
  ]);

  grunt.registerTask('default', [
    'build',
    'watch',
  ]);

  grunt.registerTask('lint', [
    'scsslint',
    'coffeelint'
  ]);

};
