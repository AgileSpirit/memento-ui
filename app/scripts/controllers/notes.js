'use strict';

/**
 * @ngdoc function
 * @name mementoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mementoApp
 */
angular.module('mementoApp')
    .controller('NotesCtrl', ['$scope', '$http', 'MockServices', function ($scope, $http, services) {

        $scope.notes = [];

        function reloadNotes () {
            $scope.notes = services.listNotes();
        }

        /**
         * Note editor displaying management
         */

        $scope.noteDetailsVisible = false;

        $scope.openNoteEditor = function () {
            $scope.noteDetailsVisible = true;
        };

        $scope.closeNoteEditor = function () {
            $scope.noteDetailsVisible = false;
        };

        /**
         * Declare new Note
         */

        $scope.newNote = function () {
            $scope.note = {
                id: null,
                creationDate: null,
                modificationDate: null,
                title: null,
                content: null,
                type: 'NOTE',
                url: null,
                description: null
            };
            $scope.noteDetailsVisible = true;
        };

        /**
         * CRUD
         */

        $scope.createNote = function (note) {
            services.createNote(note);
            reloadNotes();
            $scope.closeNoteEditor();
        };

        $scope.readNote = function (noteId) {
            var note = services.getNote(noteId);
            $scope.originalNote = note;
            $scope.editedNote = {
                id: note.id,
                creationDate: note.creationDate,
                modificationDate: note.modificationDate,
                title: note.title,
                content: note.content,
                type: note.type,
                url: note.url,
                description: note.description
            };
            $scope.openNoteEditor();
        };

        $scope.updateNote = function () {
            services.updateNote($scope.editedNote);
            reloadNotes();
            $scope.closeNoteEditor();
        };

        $scope.deleteNote = function (noteId) {
            console.log('TODO: ' + 'NotesCtrl#deleteNote');
            services.deleteNote(noteId);
            $scope.closeNoteEditor();
        };

        reloadNotes();

    }]);


/*
 $http.get('https://memento-api-agilespirit.c9.io/api/notes').
 success(function(data) {
 $scope.notes = data.notes;
 });
 */
