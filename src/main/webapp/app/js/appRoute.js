angular.module('myApp').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/ElizaWords');

    $stateProvider
            .state('ElizaWords', {
                url: '/ElizaWords',
                templateUrl: 'partials/home.html',
                controller: 'HomeController'
            })
            .state('store', {
                url: '/store',
                templateUrl: 'partials/store.html',
                controller: 'StoreController'
            });

    //ADMIN states
    $stateProvider
            .state('admin', {
                url: '/admin',
                abstract: true,
                templateUrl: 'partials/admin/admin.html'
            })
            .state('admin.users', {
                url: '/users',
                templateUrl: 'partials/admin/employeeAdmin.html',
                controller: 'AdminUsersController'
            })
            .state('admin.words', {
                url: '/words',
                templateUrl: 'partials/admin/wordsAdmin.html',
                controller: 'AdminWordsController'
            })
            .state('admin.give', {
                url: '/give',
                templateUrl: 'partials/admin/awardsLogAdmin.html',
                controller: 'AdminAwardsLogController'
            })
            .state('admin.store', {
                url: '/store',
                templateUrl: 'partials/admin/storeAdmin.html',
                controller: 'AdminStoreController'
            })
    ;

});
