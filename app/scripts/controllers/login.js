'use strict';

/**
 * @ngdoc function
 * @name mementoApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the mementoApp
 */
angular.module('mementoApp')
  .controller('LoginCtrl', ['$rootScope', '$scope', '$location', '$window', 'ApiServices',
        function ($rootScope, $scope, $location, apiServices) {

        // signIn
        $rootScope.userProfile = undefined;
        $rootScope.hasUserProfile = false;
        $rootScope.isSignedIn = false;
        $scope.immediateFailed = false;

        $scope.renderSignIn = function() {
                gapi.signin.render('myGsignin', {
                    'callback': $scope.signIn,
                    'clientid': '276048965691-5mbhe3lasuea0gu49o8h14jboeo8tua6.apps.googleusercontent.com',
                    'requestvisibleactions': 'http://schema.org/AddAction',
                    'scope': 'https://www.googleapis.com/auth/plus.login',
                    'theme': 'dark',
                    'cookiepolicy': 'single_host_origin'
                });
            };

            $scope.signIn = function(authResult) {
            $scope.$apply(function() {
                $scope.processAuth(authResult);
            });
        };

        $scope.processAuth = function(authResult) {
            $scope.immediateFailed = true;
            if ($rootScope.isSignedIn) {
                return 0;
            }
            if (authResult['access_token']) {
                var request = {
                    'googleTokenId' : authResult['id_token']
                };

                $scope.immediateFailed = false;
                // Successfully authorized, create session
                apiServices.login(request, (function(response) {
                    $scope.signedIn(response);
                }));
            } else if (authResult['error']) {
                if (authResult['error'] == 'immediate_failed') {
                    $scope.immediateFailed = true;
                } else {
                    console.log('Error:' + authResult['error']);
                }
            }
        };

        $scope.signedIn = function(connectionResponse) {
            $rootScope.isSignedIn = true;
            $rootScope.userProfile = connectionResponse.account;
            $rootScope.accessToken = connectionResponse.accessToken;
            $rootScope.hasUserProfile = true;

            $location.path('/dashboard');
        };

        $scope.start = function() {
            $scope.renderSignIn();
        };

        $scope.start();

    }]);
