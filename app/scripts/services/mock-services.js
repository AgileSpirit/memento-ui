'use strict';

/**
 * @ngdoc service
 * @name mementoUiApp.Documentservice
 * @description
 * # Documentservice
 * Service in the mementoUiApp.
 */
angular.module('mementoApp')
  .service('MockServices', function MockServices() {

        /*
         * BOOKMARKS
         */

        // Model
        this.bookmarks = [{
            id: 1,
            creationDate: new Date(2014, 9, 3),
            modificationDate: null,
            title: '[OCTO] [Blog] Designer une API REST',
            content: '<p>Lorem ipsum dolor sit amet, cu exerci cetero integre est, qui convenire signiferumque eu. Nam stet utinam molestie eu, te sensibus molestiae prodesset nam, est vero consequat inciderint id. Cibo errem expetenda mei no, ocurreret consectetuer cu vel. Vel et conceptam scriptorem, vis cu quando suscipiantur. Et vel semper posidonium.</p><p>Ius ut utamur feugiat consetetur. Harum virtute conceptam his ea, sea et tibique invidunt. Cu indoctum conclusionemque qui, ad quas saperet eos. Ius sumo aliquam te, errem oratio ea sea.</p><p>Novum persecuti usu cu. Ea nec dolore partem. Sit invidunt salutandi suscipiantur eu. Ad cibo convenire mnesarchum eum, et vocibus indoctum intellegat mea. Sed latine pertinacia ei.</p><p>Cum et molestiae vulputate reformidans. Vel erat scriptorem cu, vis ne antiopam electram. Vero invenire neglegentur cum ei, an tantas exerci pro, ad vim delectus oporteat recusabo. Ne diam salutatus est, mea id aeque gubergren adipiscing, ad per tale munere cotidieque.</p>',
            type: 'BOOKMARK',
            url: 'http://blog.octo.com/designer-une-api-rest/',
            description: 'Lorem ipsum dolor sit amet, cu exerci cetero integre est, qui convenire signiferumque eu. Nam stet utinam molestie eu, te sensibus molestiae prodesset nam, est vero consequat inciderint id. Cibo errem expetenda mei no, ocurreret consectetuer cu vel. Vel et conceptam scriptorem, vis cu quando suscipiantur. Et vel semper posidonium.'
        }, {
            id: 2,
            creationDate: new Date(2014, 7, 9),
            modificationDate: null,
            title: 'Bonnes pratiques d\'implémentation de services applicatifs',
            content: '<p>Les architectures à base de services sont depuis longtemps monnaies courantes. Avec l\'avènement du Web et la montée en puissance des architectures REST et/ou orientées micro-services, i.e. les WOA (Web Oriented Architectures) ou même du DDD (et sa couche "application"), les services applicatifs ont de beaux jours devant eux.</p><p>Une difficulté, quand on écrit de tels composants, est de définir une stratégie Orientée Objet à la fois simple, cohérente et applicable à tous les services applicatifs de notre logiciel.</p><p>Je vous livre ci-dessous les bonnes pratiques que j\'applique quand je dois concevoir et développer ce type de composants (services ESB/EAI, WS SOAP/XML, Resources REST, etc.).</p>',
            type: 'BOOKMARK',
            url: 'http://localhost',
            description: 'Les architectures à base de services sont depuis longtemps monnaies courantes. Avec l\'avènement du Web et la montée en puissance des architectures REST et/ou orientées micro-services, i.e. les WOA (Web Oriented Architectures) ou même du DDD (et sa couche "application"), les services applicatifs ont de beaux jours devant eux.'
        }, {
            id: 3,
            creationDate: new Date(2014, 5, 20),
            modificationDate: null,
            title: 'Software Craftsmanship : une culture à transmettre',
            content: '',
            type: 'BOOKMARK',
            url: 'http://blog.octo.com/software-craftsmanship-une-culture-a-transmettre/',
            description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum.'
        }, {
            id: 4,
            creationDate: new Date(2014, 3, 23),
            modificationDate: null,
            title: 'AngularJS pour aujourd’hui et pour demain',
            content: '<p><b>Java</b> est le nom de marque d\'une <a href="/wiki/Technique" title="Technique">technique</a> informatique développée initialement par <a href="/wiki/Sun_Microsystems" title="Sun Microsystems">Sun Microsystems</a> puis par <a href="/wiki/Oracle_(entreprise)" title="Oracle (entreprise)">Oracle</a>&nbsp;: la «&nbsp;<i>technologie Java™</i>&nbsp;».</p><p>Java est utilisé dans une grande variété de <a href="/wiki/Plate-forme_(informatique)" title="Plate-forme (informatique)">plates-formes</a> depuis les <a href="/wiki/Syst%C3%A8me_embarqu%C3%A9" title="Système embarqué">systèmes embarqués</a> et les <a href="/wiki/T%C3%A9l%C3%A9phone_mobile" title="Téléphone mobile">téléphones mobiles</a>, les <a href="/wiki/Ordinateur" title="Ordinateur">ordinateurs</a> individuels, les <a href="/wiki/Serveur_informatique" title="Serveur informatique">serveurs</a>, les applications d\’entreprise, les <a href="/wiki/Superordinateur" title="Superordinateur">superordinateurs</a>, etc.</p>',
            type: 'BOOKMARK',
            url: 'http://blog.octo.com/angularjs-pour-aujourdhui-et-pour-demain/',
            description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum.'
        }, {
            id: 5,
            creationDate: new Date(2014, 2, 12),
            modificationDate: null,
            title: 'Lorem ipsum dolor sit amet',
            content: '<p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p><p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p><p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>',
            type: 'BOOKMARK',
            url: 'http://localhost',
            description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum.'
        }, {
            id: 6,
            creationDate: new Date(2014, 1, 1),
            modificationDate: null,
            title: 'Lorem ipsum dolor sit amet',
            content: '<p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p><p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p><p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>',
            type: 'BOOKMARK',
            url: 'http://localhost',
            description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum.'
        }];

        var bookmarkIndex = this.bookmarks.length;

        this.listBookmarks = function () {
            return this.bookmarks;
        };

        this.getBookmark = function (bookmarkId) {
            for (bookmarkIndex = 0 ; bookmarkIndex < this.bookmarks.length ; bookmarkIndex++) {
                var bookmark = this.bookmarks[bookmarkIndex];
                if (bookmark.id === bookmarkId) {
                    return bookmark;
                }
            }
            return null;
        };

        this.createBookmark = function (bookmark) {
            var now = new Date();
            bookmark.creationDate = now.toString();
            this.bookmarks.push(bookmark);
            bookmarkIndex++;
        };

        this.updateBookmark = function (editedBookmark) {
            for (bookmarkIndex = 0 ; bookmarkIndex < this.bookmarks.length ; bookmarkIndex++) {
                var bookmark = this.bookmarks[bookmarkIndex];
                if (bookmark.id === editedBookmark.id) {
                    var now = new Date();
                    editedBookmark.modificationDate = now.toString();
                    this.bookmarks[bookmarkIndex] = editedBookmark;
                    return;
                }
            }
        };

        this.deleteBookmark = function (bookmarkId) {
            this.bookmarks.forEach(function(element, index, array) {
                if (element.id === bookmarkId) {
                    array.splice(index, 1);
                }
            });
        };

        /*
         * NOTES
         */

        // Model
        this.notes = [{
            id: 1,
            creationDate: '2014-01-01',
            modificationDate: null,
            title: 'Bla bla bla',
            content: '<p>Bla bla bla</p>',
            type: 'NOTE'
        }, {
            id: 2,
            creationDate: '2014-01-02',
            modificationDate: null,
            title: 'It works !',
            content: '<p>Hello world :-)</p>',
            type: 'NOTE'
        }];

        var noteIndex = this.notes.length;

        this.listNotes = function () {
            return this.notes;
        };

        this.getNote = function (noteId) {
            for (noteIndex = 0 ; noteIndex < this.notes.length ; noteIndex++) {
                var note = this.notes[noteIndex];
                if (note.id === noteId) {
                    return note;
                }
            }
            return null;
        };

        this.createNote = function (note) {
            this.notes.push(note);
            noteIndex++;
        };

        this.updateNote = function (editedNote) {
            for (noteIndex = 0 ; noteIndex < this.notes.length ; noteIndex++) {
                var note = this.notes[noteIndex];
                if (note.id === editedNote.id) {
                    this.notes[noteIndex] = editedNote;
                    return;
                }
            }
        };

        this.deleteNote = function (noteId) {
            this.notes.forEach(function(element, index, array) {
                if (element.id === noteId) {
                    array.splice(index, 1);
                }
            });
        };




    });
