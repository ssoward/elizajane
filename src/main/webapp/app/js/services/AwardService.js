angular.module('myApp').service('AwardService', function ($http, $log) {
    var prefix = '/ejs';
    this.updateAward = function(award){
        return $http({
            method: 'PUT',
            data: award,
            url: prefix+'/api/awards'
        });
    }

    this.getAllComplements = function (){
        return $http({
            method: 'GET',
            url: prefix+'/api/complements'
        });
    };

    this.deleteAward = function(award){
        return $http({
            method: 'DELETE',
            params: {
                id: award.id
            },
            url: prefix+'/api/awards'
        });
    };

    this.fetchAwards = function(){
        return $http({
            method: 'GET',
            url: prefix+'/api/awards'
        });
    };

    this.uploadFiles = function(fd){
        return $http({
            method: 'POST',
            url: prefix+'/api/content-files/upload',
            data: fd,
            withCredentials: true,
            headers: {'Content-Type': undefined },
            transformRequest: angular.identity
        });
    };

});