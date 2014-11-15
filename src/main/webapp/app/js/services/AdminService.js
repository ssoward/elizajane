angular.module('myApp').service('AdminService', function ($http, $log) {
    var user = null;
    var prefix = '/ejs';

    this.getLoggedInUser = function (){
        return $http({
            method: 'GET',
            url: prefix+'/api/loggedIn'
        }).then(function(res){
            user = res.data;
            return res;
        });
    };

    this.getAllUsers = function (){
        return $http({
            method: 'GET',
            url: prefix+'/api/employees'
        });
    };

    this.setUser = function (pro){
        user = pro;
    };

    this.getUser = function (){
        return user;
    };

    this.saveNewUser = function(praiser){
        return $http({
            method: 'POST',
            data: praiser,
            url: prefix+'/api/employee'
        });
    }

    this.saveCount = function(praiser){
        return $http({
            method: 'PUT',
            data: praiser,
            url: prefix+'/api/employee/count'
        });
    }

    this.deleteUser = function(praiser){
        return $http({
            method: 'DELETE',
            params: {
                username: praiser.email
            },
            url: prefix+'/api/employee'
        });
    }

});