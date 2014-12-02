'use strict';

/**
 * @ngdoc function
 * @name mementoApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the mementoApp
 */
angular.module('mementoApp')
  .controller('AuthenticationCtrl', ['$rootScope', '$scope', '$location',
        function ($rootScope, $scope, $location, $window) {

            $scope.credentials = {
                login: 'test',
                password: 'test'
            };

            $scope.login = function () {
                if ($scope.credentials.login === $scope.credentials.password) {
                    var user = {
                        login: $scope.credentials.login,
                        password: $scope.credentials.password
                    };
                    $scope.$parent.connectUser(user);
                }
            };

    }]);
