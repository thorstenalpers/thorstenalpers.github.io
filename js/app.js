
requirejs(['./require-config'], function (common) {
    requirejs(['ng-route', 'jquery', 'bootstrap', 'particlesJS', 'typed', 'progressbarjs'], 
    function (rou, $, bootstr, undefParam, Typed, ProgressBar) {
    
        var app = angular.module('MyApp', ['ngRoute']);

        app.config( function ($locationProvider, $routeProvider) {
           
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
              });
            $locationProvider.hashPrefix('');
            
            $routeProvider
    
                .when('/', {
                    templateUrl: 'pages/home/index.html',
                    controller: 'HomeController'
                })
    
                .when('/datenschutz', {
                    templateUrl: 'pages/datenschutz/index.html',
                    controller: 'DatenschutzController'
                })
    
                .when('/impressum', {
                    templateUrl: 'pages/impressum/index.html',
                    controller: 'ImpressumController'
                })
                .when('/kenntnisse', {
                    templateUrl: 'pages/kenntnisse/index.html',
                    controller: 'KenntnisseController'
                })
                .when('/lebenslauf', {
                    templateUrl: 'pages/lebenslauf/index.html',
                    controller: 'LebenslaufController'
                })
    
                .otherwise({
                    redirectTo: '/'
                });
        });
/*         app.config(['$locationProvider', function($locationProvider) {
                        $locationProvider.hashPrefix('');
                         $locationProvider.html5Mode(true);  
                    }]); */
        // add an controller which sets the current navigation item to active
        app.controller('NavigationController', function ($scope, $location) {
            $scope.isActive = function (viewLocation) {
                return viewLocation === $location.path();
            };
            $scope.message = 'Hello from HomeController';
        });
    
    
    
        app.controller('DatenschutzController', function ($scope) {
            $scope.message = 'Hello from DatenschutzController';
        });
    
        app.controller('ImpressumController', function ($scope) {
            $scope.message = 'Hello from ImpressumController';
        });

        app.controller('HomeController', function ($scope) {
            $scope.message = 'Hello from HomeController';
            angular.element(document).ready(function () {
                // partciles.js
                if ($("#particles-js").length) {
                    particlesJS.load('particles-js', 'pages/home/particles.json', function () {});
                }
                // typed.js
                if ($(".typed-text").length) {
    
                    var typed = new Typed(".typed-text", {
                        /**
                         * @property {array} strings strings to be typed
                         * @property {string} stringsElement ID of element containing string children
                         */
                        strings: ['Thorsten Alpers.', 'ein Fullstack .NET Softwareentwickler.', 'ein Softwarearchitekt.'],
                        stringsElement: null,
    
                        /**
                         * @property {number} typeSpeed type speed in milliseconds
                         */
                        typeSpeed: 110,
    
                        /**
                         * @property {number} startDelay time before typing starts in milliseconds
                         */
                        startDelay: 1500,
    
                        /**
                         * @property {number} backSpeed backspacing speed in milliseconds
                         */
                        backSpeed: 100,
    
                        /**
                         * @property {boolean} smartBackspace only backspace what doesn't match the previous string
                         */
                        smartBackspace: false,
    
                        /**
                         * @property {boolean} shuffle shuffle the strings
                         */
                        shuffle: false,
    
                        /**
                         * @property {number} backDelay time before backspacing in milliseconds
                         */
                        backDelay: 700,
    
                        /**
                         * @property {boolean} fadeOut Fade out instead of backspace
                         * @property {string} fadeOutClass css class for fade animation
                         * @property {boolean} fadeOutDelay Fade out delay in milliseconds
                         */
                        fadeOut: false,
                        fadeOutClass: 'typed-fade-out',
                        fadeOutDelay: 500,
    
                        /**
                         * @property {boolean} loop loop strings
                         * @property {number} loopCount amount of loops
                         */
                        loop: true,
                        loopCount: Infinity,
    
                        /**
                         * @property {boolean} showCursor show cursor
                         * @property {string} cursorChar character for cursor
                         * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
                         */
                        showCursor: true,
                        cursorChar: '|',
                        autoInsertCss: true,
    
                        /**
                         * @property {string} attr attribute for typing
                         * Ex: input placeholder, value, or just HTML text
                         */
                        attr: null,
    
                        /**
                         * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
                         */
                        bindInputFocusEvents: false,
    
                        /**
                         * @property {string} contentType 'html' or 'null' for plaintext
                         */
                        contentType: 'html'
    
                        ///**
                        // * All typing is complete
                        // * @param {Typed} self
                        // */
                        //onComplete: (self) => { },
    
                        ///**
                        // * Before each string is typed
                        // * @param {number} arrayPos
                        // * @param {Typed} self
                        // */
                        //preStringTyped: (arrayPos, self) => { },
    
                        ///**
                        // * After each string is typed
                        // * @param {number} arrayPos
                        // * @param {Typed} self
                        // */
                        //onStringTyped: (arrayPos, self) => { },
    
                        ///**
                        // * During looping, after last string is typed
                        // * @param {Typed} self
                        // */
                        //onLastStringBackspaced: (self) => { },
    
                        ///**
                        // * Typing has been stopped
                        // * @param {number} arrayPos
                        // * @param {Typed} self
                        // */
                        //onTypingPaused: (arrayPos, self) => { },
    
                        ///**
                        // * Typing has been started after being stopped
                        // * @param {number} arrayPos
                        // * @param {Typed} self
                        // */
                        //onTypingResumed: (arrayPos, self) => { },
    
                        ///**
                        // * After reset
                        // * @param {Typed} self
                        // */
                        //onReset: (self) => { },
    
                        ///**
                        // * After stop
                        // * @param {number} arrayPos
                        // * @param {Typed} self
                        // */
                        //onStop: (arrayPos, self) => { },
    
                        ///**
                        // * After start
                        // * @param {number} arrayPos
                        // * @param {Typed} self
                        // */
                        //onStart: (arrayPos, self) => { },
    
                        ///**
                        // * After destroy
                        // * @param {Typed} self
                        // */
                        //onDestroy: (self) => { }
                    });
                }
            });    
        });

        app.controller('KenntnisseController', function ($scope) {
            $scope.message = 'Hello from KenntnisseController';
    
            angular.element(document).ready(function () {
    
                // progressbar.js
                $('.progressbar-container .progressbar').each(function (i, obj) {
    
                    var textDiv = $(this).closest(".progressbar-container").find(".progressbar-text");
    
                    var percentage = $(this).data('percentage');
                    var durationValue = percentage * 80;
    
                    var bar = new ProgressBar.Line('#' + $(this).attr('id'), {
                        // Stroke color.
                        // Default: '#555'
                        color: '#05A',
    
                        // Width of the stroke.
                        // Unit is percentage of SVG canvas' size.
                        // Default: 1.0
                        // NOTE: In Line shape, you should control
                        // the stroke width by setting container's height.
                        // WARNING: IE doesn't support values over 6, see this bug:
                        //          https://github.com/kimmobrunfeldt/progressbar.js/issues/79
                        //strokeWidth: 2,
    
                        // If trail options are not defined, trail won't be drawn
    
                        // Color for lighter trail stroke
                        // underneath the actual progress path.
                        // Default: '#eee'
                        //trailColor: '#f4f4f4',
    
                        // Width of the trail stroke. Trail is always centered relative to
                        // actual progress path.
                        // Default: same as strokeWidth
                        //trailWidth: 0.8,
    
                        // Inline CSS styles for the created SVG element
                        // Set null to disable all default styles.
                        // You can disable individual defaults by setting them to `null`
                        // If you specify anything in this object, none of the default styles
                        // apply
                        svgStyle: {
                            display: 'block',
    
                            // Important: make sure that your container has same
                            // aspect ratio as the SVG canvas. See SVG canvas sizes above.
                            width: '100%'
                        },
    
                        // Text options. Text element is a <p> element appended to container
                        // You can add CSS rules for the text element with the className
                        // NOTE: When text is set, 'position: relative' will be set to the
                        // container for centering. You can also prevent all default inline
                        // styles with 'text.style: null'
                        // Default: null
                        text: {
                            // Initial value for text.
                            // Default: null
                            value: null,
    
                            // Class name for text element.
                            // Default: 'progressbar-text'
                            className: 'progressbar__label',
    
                            // Inline CSS styles for the text element.
                            // If you want to modify all CSS your self, set null to disable
                            // all default styles.
                            // If the style option contains values, container is automatically
                            // set to position: relative. You can disable behavior this with
                            // autoStyleContainer: false
                            // If you specify anything in this object, none of the default styles
                            // apply
                            // Default: object speficied below
                            //style: {
                            //	// Text color.
                            //	// Default: same as stroke color (options.color)
                            //	color: '#f00',
                            //	position: 'absolute',
                            //	left: '50%',
                            //	top: '50%',
                            //	padding: 0,
                            //	margin: 0,
                            //	// You can specify styles which will be browser prefixed
                            //	transform: {
                            //		prefix: true,
                            //		value: 'translate(-50%, -50%)'
                            //	}
                            //},
    
                            // Only effective if the text.style is not null
                            // By default position: relative is applied to container if text
                            // is set. Setting this to false disables that feature.
                            autoStyleContainer: true,
    
                            // Only effective if the shape is SemiCircle.
                            // If true, baseline for text is aligned with bottom of
                            // the SVG canvas. If false, bottom line of SVG canvas
                            // is in the center of text.
                            // Default: true
                            alignToBottom: true
                        },
    
                        // Fill color for the shape. If null, no fill.
                        // Default: null
                        fill: null, //'rgba(0, 0, 0, 0.5)',
    
                        // Duration for animation in milliseconds
                        // Default: 800
                        duration: durationValue,
    
                        // Easing for animation. See #easing section.
                        // Default: 'linear'
                        // easeOut, bounce
                        easing: 'easeOut',
    
                        // See #custom-animations section
                        // Built-in shape passes reference to itself and a custom attachment
                        // object to step function
                        from: {
                            color: '#eee'
                        },
                        to: {
                            color: '#000'
                        },
                        step: function (state, circle, attachment, th) {},
    
                        // If true, some useful console.warn calls will be done if it seems
                        // that progressbar is used incorrectly
                        // Default: false
                        warnings: false
                    });
    
                    // bar length: 1.0 == 100 %
                    bar.animate(percentage / 100.0, {
                        step: function (state, circle, bart) {
                            //textDiv.sett
                            textDiv.text((bar.value() * 100).toFixed(0) + '%');
                        }
                    });
                });
            });
        });
    
        app.controller('LebenslaufController', function ($scope) {
            $scope.message = 'Hello from LebenslaufController';
        });
    
        // add ng-app to the html dom
        angular.element(document).ready(function () {
            angular.bootstrap(document, [app.name]);
        });


        return app;
    });
});

/* define(['ng-route', 'jquery', 'bootstrap', 'particlesJS', 'typed', 'progressbarjs'], 
function (rou, $, bootstr, undefParam, Typed, ProgressBar) {

    var app = angular.module('MyApp', ['ngRoute']);
    app.config(function ($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl: 'pages/home/index.html',
                controller: 'HomeController'
            })

            .when('/datenschutz', {
                templateUrl: 'pages/datenschutz/index.html',
                controller: 'DatenschutzController'
            })

            .when('/impressum', {
                templateUrl: 'pages/impressum/index.html',
                controller: 'ImpressumController'
            })
            .when('/kenntnisse', {
                templateUrl: 'pages/kenntnisse/index.html',
                controller: 'KenntnisseController'
            })
            .when('/lebenslauf', {
                templateUrl: 'pages/lebenslauf/index.html',
                controller: 'LebenslaufController'
            })

            .otherwise({
                redirectTo: '/'
            });
    });

    // add an controller which sets the current navigation item to active
    app.controller('NavigationController', function ($scope, $location) {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
        $scope.message = 'Hello from HomeController';
    });



    app.controller('DatenschutzController', function ($scope) {
        $scope.message = 'Hello from DatenschutzController';
    });

    app.controller('ImpressumController', function ($scope) {
        $scope.message = 'Hello from ImpressumController';
    });
    app.controller('HomeController', function ($scope) {
        $scope.message = 'Hello from HomeController';
    });

    app.controller('KenntnisseController', function ($scope) {
        $scope.message = 'Hello from KenntnisseController';
        angular.element(document).ready(function () {
            document.getElementById('msg').innerHTML = 'Hello';
        });

        angular.element(document).ready(function () {

            // progressbar.js
            $('.progressbar-container .progressbar').each(function (i, obj) {

                var textDiv = $(this).closest(".progressbar-container").find(".progressbar-text");

                var percentage = $(this).data('percentage');
                var durationValue = percentage * 80;

                var bar = new ProgressBar.Line('#' + $(this).attr('id'), {
                    // Stroke color.
                    // Default: '#555'
                    color: '#05A',

                    // Width of the stroke.
                    // Unit is percentage of SVG canvas' size.
                    // Default: 1.0
                    // NOTE: In Line shape, you should control
                    // the stroke width by setting container's height.
                    // WARNING: IE doesn't support values over 6, see this bug:
                    //          https://github.com/kimmobrunfeldt/progressbar.js/issues/79
                    //strokeWidth: 2,

                    // If trail options are not defined, trail won't be drawn

                    // Color for lighter trail stroke
                    // underneath the actual progress path.
                    // Default: '#eee'
                    //trailColor: '#f4f4f4',

                    // Width of the trail stroke. Trail is always centered relative to
                    // actual progress path.
                    // Default: same as strokeWidth
                    //trailWidth: 0.8,

                    // Inline CSS styles for the created SVG element
                    // Set null to disable all default styles.
                    // You can disable individual defaults by setting them to `null`
                    // If you specify anything in this object, none of the default styles
                    // apply
                    svgStyle: {
                        display: 'block',

                        // Important: make sure that your container has same
                        // aspect ratio as the SVG canvas. See SVG canvas sizes above.
                        width: '100%'
                    },

                    // Text options. Text element is a <p> element appended to container
                    // You can add CSS rules for the text element with the className
                    // NOTE: When text is set, 'position: relative' will be set to the
                    // container for centering. You can also prevent all default inline
                    // styles with 'text.style: null'
                    // Default: null
                    text: {
                        // Initial value for text.
                        // Default: null
                        value: null,

                        // Class name for text element.
                        // Default: 'progressbar-text'
                        className: 'progressbar__label',

                        // Inline CSS styles for the text element.
                        // If you want to modify all CSS your self, set null to disable
                        // all default styles.
                        // If the style option contains values, container is automatically
                        // set to position: relative. You can disable behavior this with
                        // autoStyleContainer: false
                        // If you specify anything in this object, none of the default styles
                        // apply
                        // Default: object speficied below
                        //style: {
                        //	// Text color.
                        //	// Default: same as stroke color (options.color)
                        //	color: '#f00',
                        //	position: 'absolute',
                        //	left: '50%',
                        //	top: '50%',
                        //	padding: 0,
                        //	margin: 0,
                        //	// You can specify styles which will be browser prefixed
                        //	transform: {
                        //		prefix: true,
                        //		value: 'translate(-50%, -50%)'
                        //	}
                        //},

                        // Only effective if the text.style is not null
                        // By default position: relative is applied to container if text
                        // is set. Setting this to false disables that feature.
                        autoStyleContainer: true,

                        // Only effective if the shape is SemiCircle.
                        // If true, baseline for text is aligned with bottom of
                        // the SVG canvas. If false, bottom line of SVG canvas
                        // is in the center of text.
                        // Default: true
                        alignToBottom: true
                    },

                    // Fill color for the shape. If null, no fill.
                    // Default: null
                    fill: null, //'rgba(0, 0, 0, 0.5)',

                    // Duration for animation in milliseconds
                    // Default: 800
                    duration: durationValue,

                    // Easing for animation. See #easing section.
                    // Default: 'linear'
                    // easeOut, bounce
                    easing: 'easeOut',

                    // See #custom-animations section
                    // Built-in shape passes reference to itself and a custom attachment
                    // object to step function
                    from: {
                        color: '#eee'
                    },
                    to: {
                        color: '#000'
                    },
                    step: function (state, circle, attachment, th) {},

                    // If true, some useful console.warn calls will be done if it seems
                    // that progressbar is used incorrectly
                    // Default: false
                    warnings: false
                });

                // bar length: 1.0 == 100 %
                bar.animate(percentage / 100.0, {
                    step: function (state, circle, bart) {
                        //textDiv.sett
                        textDiv.text((bar.value() * 100).toFixed(0) + '%');
                    }
                });
            });
        });
    });

    app.controller('LebenslaufController', function ($scope) {
        $scope.message = 'Hello from LebenslaufController';
        angular.element(document).ready(function () {
            document.getElementById('msg').innerHTML = 'Hello';
        });
    });

    // add ng-app to the html dom
    angular.element(document).ready(function () {
        angular.bootstrap(document, [app.name]);
    });
    return app;
});
 */