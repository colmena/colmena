module.exports = {
  server   : {
    host: '0.0.0.0',
    port: 3000,
    live: 9000,
    api : 'http://0.0.0.0:3000/api/',
    site: 'http://0.0.0.0:3000'
  },
  src      : {
    index    : 'client/www/index.html',
    imgs     : 'client/www/images/**/**.*',
    path     : 'client/www/',
    lib      : 'client/www/lib/*',
    css      : [
      'client/www/css/*.css',
      'client/www/css/**/*.css',
      'client/www/fonts/***.css'
    ],
    js       : [
      'client/www/modules/*.js',
      'client/www/modules/**/*.js',
      '!client/www/modules/**/*.spec.js',
      'client/www/js/*.js'
    ],
    html     : [
      'client/www/module/**/*.html'
    ],
    translate: [
      'client/www/modules/**/**/*.js',
      '!client/www/modules/**/*.spec.js',
      'client/www/modules/**/view/*.html'
    ]
  },
  source   : 'client/www',
  dist     : 'client/dist',
  translate: 'client/translate',
  docs     : 'client/docs',
  bower    : [
    'bower.json',
    '.bowerrc'
  ]
};
