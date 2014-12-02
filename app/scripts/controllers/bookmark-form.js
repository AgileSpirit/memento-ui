'use strict';

angular.module('mementoApp')
    .controller('BookmarkFormCtrl', ['$scope', '$rootScope', 'MockServices',
        function ($scope, $rootScope, services) {

            // Initialize the bookmark object that will be used for wizard
            $scope.newBookmark = {};

            $scope.addBookmark = function () {
                services.createBookmark($scope.newBookmark);
                console.log('Bookmark added :-)');
            };

        }]);
