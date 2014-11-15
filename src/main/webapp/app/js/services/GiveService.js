angular.module('myApp').service('GiveService', function ($http, $log) {
    var prefix = '/ejs';
    this.savePraise = function(praise){
        return $http({
            method: 'POST',
            data: praise,
            url: prefix+'/api/praise'
        });
    }

    this.getAllPraises = function (){
        return $http({
            method: 'GET',
            url: prefix+'/api/give/praises'
        });
    };

    this.deletePraise = function(praise){
        return $http({
            method: 'DELETE',
            params: {
                id: praise.id
            },
            url: prefix+'/api/praise'
        });
    }

    this.awardDistributed = function(give){
        return $http({
            method: 'PUT',
            data: give,
            url: prefix+'/api/gives/distributed'
        });
    }

    this.fetchPurchasedLogs = function (){
        return $http({
            method: 'GET',
            url: prefix+'/api/gives/logs'
        });
    };

});