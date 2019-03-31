requirejs.config({

    /*     baseUrl: '../lib',
     */
    /* define libraries to be loaded */
    paths: {
        'angular': '../lib/angular.js/angular',
        'ng-resource': '../lib/angular.js/angular-resource.min',
        'ng-route': '../lib/angular.js/angular-route.min',
        'jquery': '../lib/jquery/jquery.min',
        'particlesJS': '../lib/particles.js/particles.min',
        'bootstrap': '../lib/bootstrap/js/bootstrap.bundle.min',
        'progressbarjs': '../lib/progressbar.js/progressbar.min',
        'typed': '../lib/typed.js/typed.min',
        'app': 'app',
    },
    /* dependencies */
    shim: {
        'angular': {
            deps: ['jquery']
        },
        'ng-route': {
            deps: ['angular']
        },
        'ng-resource': {
            deps: ['angular']
        },
        'ng-resource': {
            deps: ['ng-route']
        },
        'app': {
            deps: ['ng-route', 'jquery', 'bootstrap', 'particlesJS', 'typed', 'progressbarjs', 'ng-resource']
        }
    }
});
