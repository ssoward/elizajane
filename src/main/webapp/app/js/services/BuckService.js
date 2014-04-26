angular.module('myApp').service('BuckService', function ($http, $log) {

    this.decrementBucks = function(award){
        return $http({
            method: 'PUT',
            data: award,
            url: '/api/buck/buy'
        });
    }

    this.getAllComplements = function (){
        return $http({
            method: 'GET',
            url: '/api/complements'
        });
    };

    this.deleteComplement = function(praise){
        return $http({
            method: 'DELETE',
            params: {
                id: praise.id
            },
            url: '/api/complements'
        });
    }

});