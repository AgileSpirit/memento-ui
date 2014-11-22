'use strict';

/**
 * @ngdoc function
 * @name mementoUiApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the mementoUiApp
 */
angular.module('mementoApp')
  .controller('SandboxCtrl', ['$rootScope', '$scope',
        function ($rootScope, $scope) {
        // Model data

        // Initialize
        function loadDocuments() {
            var account1 = { id: '1', userId: 'xxx', firstName:'Penelope', lastName: 'Cruz' };
            var account2 = { id: '2', userId: 'yyy', firstName:'Scarlett', lastName: 'Johannson' };
            var account3 = { id: '3', userId: 'zzz', firstName:'Jennifer', lastName: 'Lawrence' };

            $scope.documents = [{
                    id: '10',
                    creationDate: '2014-01-01',
                    modificationDate: null,
                    owner: account1,
                    title: 'Hello World',
                    content: '<p>It works !</p>',
                    type: 'BOOKMARK',
                    url: 'http://localhost',
                    description: 'Localhost works !'
                }, {
                    id: '11',
                    creationDate: '2014-01-02',
                    modificationDate: null,
                    owner: account1,
                    title: 'Lorem ipsum dolor sit amet',
                    content: '<p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p><p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p><p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>',
                    type: 'BOOKMARK',
                    url: 'http://localhost',
                    description: 'Localhost works !'
                }
            ];
        }

        /**
         * Method called after this controller was initialized
         */
        debugger;
        function initialize() {
            loadDocuments();
        }
        initialize();

    }]
  );
