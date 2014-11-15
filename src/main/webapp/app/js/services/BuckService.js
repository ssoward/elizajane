angular.module('myApp').service('BuckService', function ($http, $log) {
    var prefix = '/ejs';
    this.decrementBucks = function(award){
        return $http({
            method: 'PUT',
            data: award,
            url: prefix+'/api/buck/buy'
        });
    }

    this.getAllComplements = function (){
        return $http({
            method: 'GET',
            url: prefix+'/api/complements'
        });
    };

    this.deleteComplement = function(praise){
        return $http({
            method: 'DELETE',
            params: {
                id: praise.id
            },
            url: prefix+'/api/complements'
        });
    }

});