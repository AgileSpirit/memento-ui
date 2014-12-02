'use strict';

/**
 * @ngdoc overview
 * @name mementoApp
 * @description
 * # mementoApp
 *
 * Main module of the application.
 */
angular
    .module('mementoApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap'
    ])
    .config(function ($routeProvider, $httpProvider) {
        $routeProvider
/*
            .when('/about',     { templateUrl: 'views/about.html',      controller: 'AboutCtrl' })
            .when('/login',     { templateUrl: 'views/login.html',      controller: 'LoginCtrl' })
            .when('/main',      { templateUrl: 'views/main.html',       controller: 'MainCtrl' })
            .when('/error',     { templateUrl: 'views/error.html',      controller: 'ErrorCtrl' })
            .when('/dashboard', { templateUrl: 'views/dashboard.html',  controller: 'DashboardCtrl' })
            .when('/editor',    { templateUrl: 'views/editor.html',     controller: 'EditorCtrl' })
            .when('/sandbox',   { templateUrl: 'views/sandbox.html',    controller: 'SandboxCtrl' })
*/
            .when('/authentication',   { templateUrl: 'views/authentication.html',    controller: 'AuthenticationCtrl' })
            .when('/bookmarks',   { templateUrl: 'views/bookmarks.html',    controller: 'BookmarksCtrl' })
            .when('/notes',   { templateUrl: 'views/notes.html',    controller: 'NotesCtrl' })
            .otherwise({ redirectTo: '/authentication' });

        $httpProvider.interceptors.push('OAuthWebInterceptor');

        /* Remove '#' character in URLs */
        // $locationProvider.html5Mode(true);
    });
