'use strict';

angular.module('mementoApp')
    .controller('BookmarkFormCtrl', ['$scope', '$rootScope', '$modalInstance', 'MockServices',
        function ($scope, $rootScope, $modalInstance, services) {

            // Initialize the bookmark object that will be used for wizard
            $scope.bookmark = {};

            $scope.addBookmark = function () {
                $modalInstance.close($scope.bookmark);
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };

        }]);
