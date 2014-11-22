'use strict';

/**
 * @ngdoc function
 * @name mementoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mementoApp
 */
angular.module('mementoApp')
    .controller('BookmarksCtrl', function ($scope, $http) {

        $scope.bookmarks = [];

        /*
                $scope.bookmarks = [{
                    id: '10',
                    creationDate: '2014-01-01',
                    modificationDate: null,
                    title: 'Hello World',
                    content: '<p>Lorem ipsum dolor sit amet, cu exerci cetero integre est, qui convenire signiferumque eu. Nam stet utinam molestie eu, te sensibus molestiae prodesset nam, est vero consequat inciderint id. Cibo errem expetenda mei no, ocurreret consectetuer cu vel. Vel et conceptam scriptorem, vis cu quando suscipiantur. Et vel semper posidonium.</p><p>Ius ut utamur feugiat consetetur. Harum virtute conceptam his ea, sea et tibique invidunt. Cu indoctum conclusionemque qui, ad quas saperet eos. Ius sumo aliquam te, errem oratio ea sea.</p><p>Novum persecuti usu cu. Ea nec dolore partem. Sit invidunt salutandi suscipiantur eu. Ad cibo convenire mnesarchum eum, et vocibus indoctum intellegat mea. Sed latine pertinacia ei.</p><p>Cum et molestiae vulputate reformidans. Vel erat scriptorem cu, vis ne antiopam electram. Vero invenire neglegentur cum ei, an tantas exerci pro, ad vim delectus oporteat recusabo. Ne diam salutatus est, mea id aeque gubergren adipiscing, ad per tale munere cotidieque.</p>',
                    type: 'BOOKMARK',
                    url: 'http://localhost',
                    description: 'Lorem ipsum dolor sit amet, cu exerci cetero integre est, qui convenire signiferumque eu. Nam stet utinam molestie eu, te sensibus molestiae prodesset nam, est vero consequat inciderint id. Cibo errem expetenda mei no, ocurreret consectetuer cu vel. Vel et conceptam scriptorem, vis cu quando suscipiantur. Et vel semper posidonium.'
                }, {
                    id: '11',
                    creationDate: '2014-01-02',
                    modificationDate: null,
                    title: 'Bonnes pratiques d\'implémentation de services applicatifs',
                    content: '<p>Les architectures à base de services sont depuis longtemps monnaies courantes. Avec l\'avènement du Web et la montée en puissance des architectures REST et/ou orientées micro-services, i.e. les WOA (Web Oriented Architectures) ou même du DDD (et sa couche "application"), les services applicatifs ont de beaux jours devant eux.</p><p>Une difficulté, quand on écrit de tels composants, est de définir une stratégie Orientée Objet à la fois simple, cohérente et applicable à tous les services applicatifs de notre logiciel.</p><p>Je vous livre ci-dessous les bonnes pratiques que j\'applique quand je dois concevoir et développer ce type de composants (services ESB/EAI, WS SOAP/XML, Resources REST, etc.).</p>',
                    type: 'BOOKMARK',
                    url: 'http://localhost',
                    description: 'Les architectures à base de services sont depuis longtemps monnaies courantes. Avec l\'avènement du Web et la montée en puissance des architectures REST et/ou orientées micro-services, i.e. les WOA (Web Oriented Architectures) ou même du DDD (et sa couche "application"), les services applicatifs ont de beaux jours devant eux.'
                }, {
                    id: '11',
                    creationDate: '2014-01-02',
                    modificationDate: null,
                    title: 'Lorem ipsum dolor sit amet',
                    content: '',
                    type: 'BOOKMARK',
                    url: 'http://localhost',
                    description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum.'
                }, {
                    id: '11',
                    creationDate: '2014-01-02',
                    modificationDate: null,
                    title: 'Lorem ipsum dolor sit amet',
                    content: '<p><b>Java</b> est le nom de marque d\'une <a href="/wiki/Technique" title="Technique">technique</a> informatique développée initialement par <a href="/wiki/Sun_Microsystems" title="Sun Microsystems">Sun Microsystems</a> puis par <a href="/wiki/Oracle_(entreprise)" title="Oracle (entreprise)">Oracle</a>&nbsp;: la «&nbsp;<i>technologie Java™</i>&nbsp;».</p><p>Java est utilisé dans une grande variété de <a href="/wiki/Plate-forme_(informatique)" title="Plate-forme (informatique)">plates-formes</a> depuis les <a href="/wiki/Syst%C3%A8me_embarqu%C3%A9" title="Système embarqué">systèmes embarqués</a> et les <a href="/wiki/T%C3%A9l%C3%A9phone_mobile" title="Téléphone mobile">téléphones mobiles</a>, les <a href="/wiki/Ordinateur" title="Ordinateur">ordinateurs</a> individuels, les <a href="/wiki/Serveur_informatique" title="Serveur informatique">serveurs</a>, les applications d\’entreprise, les <a href="/wiki/Superordinateur" title="Superordinateur">superordinateurs</a>, etc.</p>',
                    type: 'BOOKMARK',
                    url: 'http://localhost',
                    description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum.'
                }, {
                    id: '11',
                    creationDate: '2014-01-02',
                    modificationDate: null,
                    title: 'Lorem ipsum dolor sit amet',
                    content: '<p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p><p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p><p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>',
                    type: 'BOOKMARK',
                    url: 'http://localhost',
                    description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum.'
                }, {
                    id: '11',
                    creationDate: '2014-01-02',
                    modificationDate: null,
                    title: 'Lorem ipsum dolor sit amet',
                    content: '<p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p><p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p><p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>',
                    type: 'BOOKMARK',
                    url: 'http://localhost',
                    description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum.'
                }];

        */
        function loadBookmakrs () {
            $http.get('https://memento-api-agilespirit.c9.io/api/bookmarks').
                success(function(data) {
                    $scope.bookmarks = data.bookmarks;
                });
        }

        /**
         * Bookmark editor displaying management
         */

        $scope.bookmarkDetailsVisible = false;
        $scope.bookmark = null;

        $scope.openBookmark = function (bookmark) {
            console.log('bookmark.id = ' + bookmark.id + ', bookmark.url = ' + bookmark.url);
            $scope.bookmark = bookmark;
            $scope.bookmarkDetailsVisible = true;
        };

        $scope.closeBookmarkEditor = function () {
            $scope.bookmark = null;
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
         * Add new bookmark
         */

        $scope.addBookmark = function () {
            $scope.closeBookmarkEditor();
        };

        loadBookmakrs();

    });
