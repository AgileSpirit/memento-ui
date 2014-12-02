'use strict';

/**
 * @ngdoc function
 * @name mementoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mementoApp
 */
angular.module('mementoApp')
    .controller('MenuCtrl', function ($scope, $location) {

        $scope.logout = function () {
            $scope.$parent.disconnectUser();
        };
    }
);
