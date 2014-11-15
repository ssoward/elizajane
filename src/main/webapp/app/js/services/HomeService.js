angular.module('myApp').service('HomeService', function ($http, $log) {
    var user = {};
    var prefix = '/ejs';

    this.getLoggedInUser = function (){
        return $http({
            method: 'GET',
            url: prefix+'/api/loggedIn'
        });
    };

    this.getAllUsers = function (){
        return $http({
            method: 'GET',
            url: prefix+'/users'
        });
    };

    this.setUser = function (pro){
        user = pro;
    };

    this.getUser = function (){
        return user;
    };
});