'use strict';

/**
 * @ngdoc function
 * @name mementoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mementoApp
 */
angular.module('mementoApp')
    .controller('BookmarksCtrl', ['$scope', '$http', 'MockServices', function ($scope, $http, services) {

        $scope.bookmarks = [];

        function reloadBookmarks () {
            $scope.bookmarks = services.listBookmarks();
        }

        /**
         * Bookmark editor displaying management
         */

        $scope.bookmarkDetailsVisible = false;

        $scope.openBookmarkEditor = function () {
            $scope.bookmarkDetailsVisible = true;
        };

        $scope.closeBookmarkEditor = function () {
            $scope.bookmarkDetailsVisible = false;
        };

        /**
         * Declare new Bookmark
         */

        $scope.newBookmark = function () {
            $scope.bookmark = {
                id: null,
                creationDate: null,
                modificationDate: null,
                title: null,
                content: null,
                type: 'BOOKMARK',
                url: null,
                description: null
            };
            $scope.bookmarkDetailsVisible = true;
        };

        /**
         * CRUD
         */

        $scope.createBookmark = function (bookmark) {
            services.createBookmark(bookmark);
            reloadBookmarks();
            $scope.closeBookmarkEditor();
        };

        $scope.readBookmark = function (bookmarkId) {
            var bookmark = services.getBookmark(bookmarkId);
            $scope.originalBookmark = bookmark;
            $scope.editedBookmark = {
                id: bookmark.id,
                creationDate: bookmark.creationDate,
                modificationDate: bookmark.modificationDate,
                title: bookmark.title,
                content: bookmark.content,
                type: bookmark.type,
                url: bookmark.url,
                description: bookmark.description
            };
            $scope.openBookmarkEditor();
        };

        $scope.updateBookmark = function () {
            services.updateBookmark($scope.editedBookmark);
            reloadBookmarks();
            $scope.closeBookmarkEditor();
        };

        $scope.deleteBookmark = function (bookmarkId) {
            console.log('TODO: ' + 'BookmarksCtrl#deleteBookmark');
            services.deleteBookmark(bookmarkId);
            $scope.closeBookmarkEditor();
        };

        reloadBookmarks();

    }]);


/*
 $http.get('https://memento-api-agilespirit.c9.io/api/bookmarks').
 success(function(data) {
 $scope.bookmarks = data.bookmarks;
 });
 */
