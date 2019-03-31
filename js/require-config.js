requirejs.config({
    
/*     baseUrl: '../lib',
 */
    /* define libraries to be loaded */
    paths: {
        'angular': '../lib/angular.js/angular',
        'angular-resourse': '../lib/angular.js/angular-resource.min',
        'angular-route': '../lib/angular.js/angular-route.min',
        'jquery': '../lib/jquery/jquery.min',
        'particlesJS': '../lib/particles.js/particles.min',
        'bootstrap': '../lib/bootstrap/js/bootstrap.bundle.min',
        'progressbarjs': '../lib/progressbar.js/progressbar.min',
        'typed': '../lib/typed.js/typed.min'
    },
    /* dependencies */
    shim: {
        'angular': {
            deps: ['jquery']
        },
        'angular-route': {
            deps: ['angular']}
        ,
        'angular-resourse': {
            deps: ['angular']
        },     
        'particlesJS': {
            deps: ['jquery', 'bootstrap']
        },
        'index': {
            deps: ['angular-route', 'jquery', 'bootstrap', 'particlesJS', 'typed']
        },
        'foo': {
            deps: ['angular-resourse', 'angular', 'jquery', 'bootstrap']
        }
    }
});
