module.exports = {
    open      : true,
    httpPort  : 4400,
    riddlePort: 4400,
    server    : {
        dev : 'http://localhost:3000',
        prod: 'http://sistema.dev'
    },
    src       : {
        index: 'public/index.html',
        fonts: 'public/lib/ionic/fonts/**.*',
        imgs : 'public/images/**/**.*',
        path : 'public/',
        css  : [
            'public/css/*.css',
            'public/css/**/*.css'
        ],
        sass : ['scss/**/*.scss'],
        js   : [
            'public/js/*.js',
            'public/modules/*.js',
            '!public/modules/*.spec.js',
            'public/modules/**/*.js',
            '!public/modules/**/*.spec.js'
        ],
        html : [
            'public/modules/**/*.html'
        ]
    },
    libs      : [
        'public/lib/ionicons/fonts'
    ],
    source    : 'public/',
    dist      : 'dist',
    docs      : 'docs',
    scss      : 'scss/style.scss',
    bower     : [
        'bower.json',
        '.bowerrc'
    ]
};
