'use strict';

/**
 * @ngdoc function
 * @name mementoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mementoApp
 */
angular.module('mementoApp')
  .controller('MainCtrl', function ($scope, $location, $window) {

        $scope.connectUser = function (user) {
            $window.localStorage.setItem('memento-user', user);
            $location.path('/notes');
        };

        $scope.disconnectUser = function () {
            $window.localStorage.removeItem('memento-user');
            $location.path('/authentication');
        };

        $scope.isUserConnected = function () {
            return $window.localStorage.getItem('memento-user') !== null;
        };

        $scope.isMenuVisible = function () {
            var current = $location.path().substring(1);
            return current !== 'authentication';
        };

  });
