// Generated on 2015-01-02 using generator-angular 0.10.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'client/app',
    test: require('./bower.json').appPath || 'client/test',
    dist: 'dist',
    api: {
      development: 'http://0.0.0.0:3000/api/',
      production: '/api/'
    },
    site: {
      development: 'http://0.0.0.0:3000',
      production: ''
    },
    host: '0.0.0.0'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    nggettext_extract: {
      pot: {
        files: {
          'po/template.pot': [
            '<%= yeoman.app %>/modules/**/*.js',
            '<%= yeoman.app %>/modules/**/**/*.js',
            '<%= yeoman.app %>/modules/*/views/*.html',
            '<%= yeoman.app %>/modules/*/views/**/*.html'
          ]
        }
      }
    },
    nggettext_compile: {
      all: {
        options: {
          module: 'loopbackApp'
        },
        files: {
          '<%= yeoman.app %>/js/translations.js': ['po/*.po']
        }
      }
    },
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep:server']
      },
      js: {
        files: [
          '!<%= yeoman.app %>/modules/**/tests/**',
          '<%= yeoman.app %>/modules/**/{,*/}*.js'
        ],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['<%= yeoman.test %>/spec/{,*/}*.js'],
        tasks: [
          'newer:jshint:test',
          'karma'
        ]
      },
      styles: {
        files: ['<%= yeoman.app %>/css/{,*/}*.css'],
        tasks: [
          'newer:copy:styles',
          'autoprefixer'
        ]
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '<%= yeoman.app %>/**/{,*/}*.html',
          '.tmp/css/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      },
      includeSource: {
        files: ['<%= yeoman.app %>/index.tpl.html'],
        tasks: ['includeSource:server']
      }
    },

    ngconstant: {
      // Options for all targets
      options: {
        space: '  ',
        wrap: '"use strict";\n\n {%= __ngModule %}',
        name: 'config'
      },
      // Environment targets
      development: {
        options: {
          dest: '<%= yeoman.app %>/js/config.js'
        },
        constants: {
          ENV: {
            name: 'development',
            apiUrl: '<%= yeoman.api.development %>',
            siteUrl: '<%= yeoman.site.development %>'
          }
        }
      },
      production: {
        options: {
          dest: '<%= yeoman.app %>/js/config.js'
        },
        constants: {
          ENV: {
            name: 'production',
            apiUrl: '<%= yeoman.api.production %>',
            siteUrl: '<%= yeoman.site.production %>'
          }
        }
      }
    },


    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: '<%= yeoman.host %>',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/modules/**/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: '<%= yeoman.test %>/.jshintrc'
        },
        src: ['<%= yeoman.test %>/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [
          {
            dot: true,
            src: [
              '.tmp',
              '<%= yeoman.dist %>/{,*/}*',
              '!<%= yeoman.dist %>/.git{,*/}*'
            ]
          }
        ]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: '.tmp/css/',
            src: '{,*/}*.css',
            dest: '.tmp/css/'
          }
        ]
      }

    },
    includeSource: {
      options: {
        basePath: 'client/app',
        baseUrl: '/',
        templates: {
          html: {
            js: '<script src="{filePath}"></script>',
            css: '<link rel="stylesheet" href="{filePath}" />'
          }
        }
      },
      server: {
        files: {
          '<%= yeoman.app %>/index.html': '<%= yeoman.app %>/index.tpl.html'
        }
      },
      dist: {
        files: {
          '<%= yeoman.dist %>/index.html': '<%= yeoman.app %>/index.tpl.html'
        }
      }

    },
    // Automatically inject Bower components into the app
    wiredep: {
      server: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath: /\.\.\//
      },
      dist: {
        src: ['<%= yeoman.dist %>/index.html'],
        ignorePath: '../client/app/'
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/scripts/{,*/}*.js',
          '<%= yeoman.dist %>/styles/{,*/}*.css',
          '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.dist %>/fonts/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.dist %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>',
        root: '<%= yeoman.app %>',
        flow: {
          html: {
            steps: {
              js: [
                'concat',
                'uglifyjs'
              ],
              css: [
                'cssmin'
              ]
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: [
          '<%= yeoman.dist %>',
          '<%= yeoman.dist %>/images'
        ]
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/css/main.css': [
    //         '.tmp/css/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/scripts/scripts.js': [
    //         '<%= yeoman.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    imagemin: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= yeoman.app %>/images',
            src: '{,*/}*.{png,jpg,jpeg,gif}',
            dest: '<%= yeoman.dist %>/images'
          }
        ]
      }
    },

    svgmin: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= yeoman.app %>/images',
            src: '{,*/}*.svg',
            dest: '<%= yeoman.dist %>/images'
          }
        ]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          minifyJS: true
        },
        files: [
          {
            expand: true,
            cwd: '<%= yeoman.dist %>',
            src: [
              '*.html',
              'modules/**/views/{,*/}*.html'
            ],
            dest: '<%= yeoman.dist %>'
          }
        ]
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '.tmp/concat/scripts',
            src: [
              '*.js',
              '!lb-services.js',
              '!config.js',
              '!oldieshim.js'
            ],
            dest: '.tmp/concat/scripts'
          }
        ]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: '<%= yeoman.app %>',
            dest: '<%= yeoman.dist %>',
            src: [
              '*.{ico,png,txt}',
              '.htaccess',
              'modules/**/{,*/}*.html',
              'images/{,*/}*.*',
              //'css/{,*/}*.*',
              'fonts/{,*/}*.*'
            ]
          },
          {
            expand: true,
            cwd: '<%= yeoman.app %>/images',
            dest: '<%= yeoman.dist %>/images',
            src: ['generated/*']
          },
          {
            expand: true,
            cwd: '<%= yeoman.app %>/css',
            dest: '<%= yeoman.dist %>/css',
            src: ['generated/*']
          },
          {
            expand: true,
            cwd: '<%= yeoman.app %>/bower_components/bootstrap/dist',
            src: 'fonts/*',
            dest: '<%= yeoman.dist %>'
          },
          {
            expand: true,
            cwd: '<%= yeoman.app %>/bower_components/ionicons',
            src: 'fonts/*',
            dest: '<%= yeoman.dist %>'
          },
          {
            expand: true,
            cwd: '<%= yeoman.app %>/bower_components/font-awesome',
            src: 'fonts/*',
            dest: '<%= yeoman.dist %>'
          }
        ]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/css',
        dest: '.tmp/css/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      dist: [
        'copy:styles',
        'imagemin',
        'svgmin'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: '<%= yeoman.test %>/karma.conf.js',
        singleRun: true
      }
    },
    loopback_sdk_angular: {
      services: {
        options: {
          input: 'server/server.js',
          output: '<%= yeoman.app %>/js/lb-services.js',
          apiUrl: '<%= yeoman.api.development %>'
        }
      },
      development: {
        options: {
          input: 'server/server.js',
          output: '<%= yeoman.app %>/js/lb-services.js',
          apiUrl: '<%= yeoman.api.development %>'
        }
      },
      production: {
        options: {
          input: 'server/server.js',
          output: '<%= yeoman.app %>/js/lb-services.js',
          apiUrl: '<%= yeoman.api.production %>'
        }
      }
    },
    docularserver: {
      targetDir: "docs",
      livereload: true,
      port: 8000
    },
    docular: {
      useHtml5Mode: true, //Use angular's html5 mode? true/false.
      docular_webapp_target: 'docs', //The place where the docs will be generated
      showAngularDocs: true,
      showDocularDocs: true,
      groups: [
        {
          groupTitle: 'Admin',
          groupId: 'loopbackApp',
          sections: [
            {
              id: 'loopbackApp',
              title: 'LoopBack Services',
              scripts: ['<%= yeoman.app %>/modules/**/{,*/}*.js']
            }
          ]
        },
        {
          groupTitle: 'LoopBack',
          groupId: 'loopback',
          sections: [
            {
              id: 'lbServices',
              title: 'LoopBack Services',
              scripts: ['<%= yeoman.app %>/js/lb-services.js']
            }
          ]
        }
      ]
    },

    "jsbeautifier" : {
      "default": {
        src: [
          "client/app/js/app.js",
          "client/app/modules/**/*.js",
          "common/**/*.js",
          "server/**/*.js"
        ],
        options: {
          config: '.jsbeautifyrc'
        }
      },
      "git-pre-commit": {
        src : ["src/**/*.js"],
        options : {
          mode:"VERIFY_ONLY"
        }
      }
    }

  });

  // Load the plugin that provides the "loopback-angular" and "grunt-docular" tasks.

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run([
        'build',
        'connect:dist:keepalive'
      ]);
    }

    grunt.task.run([
      'clean:server',
      'includeSource:server',
      'ngconstant:development',
      'loopback_sdk_angular:development',
      'wiredep:server',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('format', [
    'jsbeautifier:default'
  ]);

  grunt.registerTask('test', [
    'clean:server',
    'includeSource:server',
    'wiredep:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'test',
    'ngconstant:production',
    'loopback_sdk_angular:production',
    'includeSource:dist',
    'wiredep:dist',
    'useminPrepare',
    //'concurrent:dist',
    //'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:dist',
    //'cdnify',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'ngconstant:development',
    'loopback_sdk_angular:development',
    'docular',
    'nggettext_extract',
    'nggettext_compile',
    'build'
  ]);

  grunt.registerTask('loopback', [
    'ngconstant:development',
    'loopback_sdk_angular:development',
    'docular'
  ]);

  grunt.registerTask('gettext', [
    'nggettext_extract',
    'nggettext_compile',
  ]);

  grunt.registerTask('includesource', [
    'includeSource:server'
  ]);

};
