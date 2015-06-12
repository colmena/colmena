module.exports = {
    open      : true,
    httpPort  : 4400,
    riddlePort: 4400,
    server    : {
        dev : 'http://localhost:3000',
        prod: 'http://sistema.dev'
    },
    src       : {
        index: 'client/app/index.html',
        fonts: 'client/app/lib/ionic/fonts/**.*',
        imgs : 'client/app/images/**/**.*',
        path : 'client/app/',
        css  : [
            'client/app/css/*.css',
            'client/app/css/**/*.css'
        ],
        sass : ['scss/**/*.scss'],
        js   : [
            'client/app/js/*.js',
            'client/app/modules/*.js',
            'client/app/modules/**/*.js'
        ],
        html : [
            'client/app/modules/**/*.html'
        ]
    },
    libs      : [
        'client/app/lib/ionicons/fonts'
    ],
    source    : 'client/app/',
    dist      : 'beta',
    docs      : 'docs',
    scss      : 'scss/style.scss',
    bower     : [
        'bower.json',
        '.bowerrc'
    ]
};
