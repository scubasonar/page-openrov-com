var paths = { 
    patterns: {}
};
var config = {
    paths: paths
};


paths.patterns.css = '/**/*.css';
paths.patterns.sass = '/**/*.scss';
paths.patterns.js = '/**/*.js';
paths.patterns.image = '/**/*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|gif|GIF|webp|WEBP|tif|TIF)';
paths.patterns.markdown = '/**/*.+(md|MD|markdown|MARKDOWN)';
paths.patterns.html = '/**/*.html';
paths.patterns.xml = '/**/*.xml';


paths.app               = './_app';
paths.dist              = './assets';
paths.styles            = paths.app + '/styles';
paths.theme             = paths.app + '/vendor/theme';
paths.appCss            = './app.css'
paths.themeCss          = './theme.css'
paths.maps              = './maps';
paths.themeImages       = paths.theme + '/images' + paths.patterns.image;
paths.appImages         = paths.app + '/images' + paths.patterns.image


paths.sassInclude       = './_includes';

paths.siteHtml = [
    './_site/**/*.html',
];

config.criticalCss = [
    'section#head',
    '.sticky-wrapper',
    '#masthead',
    '.navbar',
    '.navbar-sticky',
    '.flexslider',
    '.colapse',
    '.mejs-container',
    '.mejs-mediaelement',
    '.mejs-mediaelement *',
    '.mejs-video',
    '.or-hero-blue-tint',
    '.or-hero-gradient',
    '.container .or-hero-gradient',
    'section#head .flexslider *',
    '.background-media',
    '.hero',
    '.or-hero-btn-pre-order',
]

config.cssDontTouch = [
    '.navbar-static-top',
    '.navbar',
    '.navbar-sticky',
    '.flexslider',
    '.flexslider *',
    '.background-media',
    /pre-order-banner.*/,
    /\.mejs\-.*/,
    /\.modal.*/,
    /.masthead.*/,
]



module.exports = config;