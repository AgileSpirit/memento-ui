"use strict";angular.module("mementoApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap","textAngular"]).config(["$routeProvider","$httpProvider","$locationProvider",function(a,b){a.when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/login",{templateUrl:"views/login.html",controller:"LoginCtrl"}).when("/main",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/error",{templateUrl:"views/error.html",controller:"ErrorCtrl"}).when("/dashboard",{templateUrl:"views/dashboard.html",controller:"DashboardCtrl"}).when("/editor",{templateUrl:"views/editor.html",controller:"EditorCtrl"}).otherwise({redirectTo:"/dashboard"}),b.defaults.useXDomain=!0,delete b.defaults.headers.common["X-Requested-With"],b.interceptors.push("OAuthWebInterceptor")}]).run(["$rootScope",function(a){a.currentView="DASHBOARD",a.selectView=function(b){a.currentView=b},a.isCurrentView=function(b){return a.currentView===b},a.openEditor=function(){a.currentView="EDITOR"},a.closeEditor=function(){a.currentView="DASHBOARD"}}]),angular.module("mementoApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("mementoApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("mementoApp").controller("LoginCtrl",["$rootScope","$scope","$location","ApiServices",function(a,b,c,d){a.userProfile=void 0,a.hasUserProfile=!1,a.isSignedIn=!1,b.immediateFailed=!1,b.renderSignIn=function(){gapi.signin.render("myGsignin",{callback:b.signIn,clientid:"276048965691-5mbhe3lasuea0gu49o8h14jboeo8tua6.apps.googleusercontent.com",requestvisibleactions:"http://schema.org/AddAction",scope:"https://www.googleapis.com/auth/plus.login",theme:"dark",cookiepolicy:"single_host_origin"})},b.signIn=function(a){b.$apply(function(){b.processAuth(a)})},b.processAuth=function(c){if(b.immediateFailed=!0,a.isSignedIn)return 0;if(c.access_token){var e={googleTokenId:c.id_token};b.immediateFailed=!1,d.login(e,function(a){b.signedIn(a)})}else c.error&&("immediate_failed"==c.error?b.immediateFailed=!0:console.log("Error:"+c.error))},b.signedIn=function(b){a.isSignedIn=!0,a.userProfile=b.account,a.accessToken=b.accessToken,a.hasUserProfile=!0,c.path("/dashboard")},b.start=function(){b.renderSignIn()},b.start()}]),angular.module("mementoApp").controller("BookmarkFormCtrl",["$scope","$rootScope","$modalInstance","BookmarkService","bookmarkId",function(a,b,c,d,e){function f(){b.$emit("refreshBookmarkList")}a.bookmark={},e&&(a.bookmark=d.get({id:e})),a.saveBookmark=function(){var b=a.bookmark;b.id?(console.log("Updating bookmark..."),d.update({id:b.id},b,function(){console.log("Bookmark updated"),f()},function(){console.error("An error occurred during updating")})):(console.log("Saving bookmark..."),d.save(b,function(){console.log("Bookmark saved"),f()},function(){console.error("An error occurred during saving")})),c.close()},a.cancel=function(){c.dismiss("cancel")}}]),angular.module("mementoApp").controller("HeaderCtrl",["$scope","$modal",function(a,b){a.addBookmark=function(){b.open({templateUrl:"views/bookmark-form.html",controller:"BookmarkFormCtrl",resolve:{bookmarkId:function(){return null}}})}}]),angular.module("mementoApp").controller("ErrorCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("mementoApp").controller("DashboardCtrl",["$rootScope","$scope","$window","ApiServices","$location",function(a,b,c,d,e){function f(a,c,e){var f=g(c,b.pageSize);d.findDocuments({query:a,offset:f,size:e},function(a){b.documents=a.documents,b.searchQuery=a.query,b.totalItems=a.totalItems,b.currentPage=h(a.offset,b.pageSize),b.lastPage=Math.floor((b.totalItems+b.pageSize-1)/e)})}function g(a,b){return(a-1)*b}function h(a,b){return a/b+1}function i(){f(b.searchQuery,b.currentPage,b.pageSize)}b.searchQuery="",b.currentPage=1,b.pageSize=50,b.documents={},b.lastPage=-1,b.pageLinks={},b.search=function(){f(b.searchQuery,1,b.pageSize)},b.getDocumentExcerpt=function(a){switch(a.type){case"BOOKMARK":return a.description;case"NOTE":return a.content;default:return""}},b.getDocumentClass=function(a){switch(a){case"BOOKMARK":return"document bookmark";case"NOTE":return"document note";default:return"document"}},b.signOut=function(){d.logout({},function(a){b.signedOut(a)})},b.signedOut=function(){a.userProfile=void 0,a.hasUserProfile=!1,a.isSignedIn=!1,b.immediateFailed=!1,e.path("/login")},b.showBookmark=function(c){b.bookmark=c,a.selectView("BOOKMARK")},a.$on("refreshDocumentList",function(){f(b.searchQuery,1,b.pageSize)}),i()}]),angular.module("mementoApp").controller("EditorCtrl",["$scope","$location","ApiServices",function(){}]),angular.module("mementoApp").controller("DocumentEditorCtrl",["$rootScope","$scope","$location","ApiServices",function(a,b,c,d){function e(){b.document={}}b.documentTypes=[{label:"Bookmark",value:"BOOKMARK"},{label:"Note",value:"NOTE"}],b.selectedType=b.documentTypes[0],b.document={},b.saveDocument=function(){if(b.isBookmark()){var c={};c.title=b.document.title,c.description=b.document.description,c.url=b.document.url,d.saveBookmark(c,function(){a.closeEditor(),a.$emit("refreshDocumentList"),e()},function(){console.error("An error occurred during saving")})}else if(b.isNote()){var f={};f.title=b.document.title,f.description="",f.content=b.document.content,d.saveNote(f,function(){a.closeEditor(),a.$emit("refreshDocumentList"),e()},function(){console.error("An error occurred during saving")})}},b.isBookmark=function(){return b.selectedType===b.documentTypes[0]},b.isNote=function(){return b.selectedType===b.documentTypes[1]},b.cancel=function(){a.selectView("DASHBOARD")}}]),angular.module("mementoApp").service("ApiServices",["$resource",function(a){var b="http://localhost:8080/api";return a(b,{},{login:{method:"POST",url:b+"/connection/login",params:{connectionRequest:"@request"}},logout:{method:"POST",url:b+"/connection/logout"},findDocuments:{method:"GET",url:b+"/documents/search?q=:query&o=:offset&s=:size"},getBookmark:{method:"GET",url:b+"/bookmarks/:id",params:{id:"@id"}},saveBookmark:{method:"POST",url:b+"/bookmarks"},updateBookmark:{method:"PUT",url:b+"/bookmarks/:id",params:{id:"@id"}},deleteBookmark:{method:"DELETE",url:b+"/bookmarks/:id",params:{id:"@id"}},getNote:{method:"GET",url:b+"/notes/:id",params:{id:"@id"}},saveNote:{method:"POST",url:b+"/notes"},updateNote:{method:"PUT",url:b+"/notes/:id",params:{id:"@id"}},deleteNote:{method:"DELETE",url:b+"/notes/:id",params:{id:"@id"}}})}]),angular.module("mementoApp").service("OAuthWebInterceptor",["$rootScope",function(a){return{request:function(b){return a.isSignedIn&&(console.log("accessToken = "+a.accessToken),b.headers["X-Access-Token"]=a.accessToken,b.headers.Authorization="Bearer "+a.accessToken),b}}}]);