module.exports = {
  server: {
    host: 'localhost',
    port: 8081
  },
  src   : {
    index    : 'www/index.html',
    imgs     : 'www/images/**/**.*',
    path     : 'www/',
    lib      : 'www/lib/*',
    css      : [
      'www/css/*.css',
      'www/css/**/*.css',
      'www/fonts/***.css',
      'www/module/**/*.css'
    ],
    js       : [
      'www/module/*.js',
      'www/module/**/*.js',
      '!www/module/**/*.spec.js',
      'www/js/*.js'
    ],
    html     : [
      'www/module/**/*.html'
    ],
    translate: [
      'www/module/**/**/*.js',
      '!www/module/**/*.spec.js',
      'www/module/**/view/*.html'
    ]
  },
  source: 'www',
  dist  : 'dist',
  docs  : 'docs',
  bower : [
    'bower.json',
    '.bowerrc'
  ]
};
