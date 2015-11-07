
var app = angular.module('myApp', ['ui.router', 'ngCookies'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: '../templates/login.html'
            })

            .state('root', {
                url: '/root',
                templateUrl: '../templates/root.html'
            })

            .state('root.overview', {
                url: '/overview',
                templateUrl: '../templates/overview.html'
            })

            .state('root.work', {
                url: '/work',
                templateUrl: '../templates/work.html'
            })

            .state('root.producer', {
                url: '/producer',
                templateUrl: '../templates/producer.html'
            })

            .state('root.contact', {
                url: '/contact',
                templateUrl: '../templates/contact.html'
            });
    });

