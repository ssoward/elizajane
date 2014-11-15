angular.module('myApp').service('WordsService', function ($http, $log) {
    var prefix = '/ejs';

    this.saveWord = function(word){
        return $http({
            method: 'POST',
            data: word,
            url: prefix+'/api/words'
        });
    }

    this.getAllWords = function (){
        return $http({
            method: 'GET',
            url: prefix+'/api/words'
        });
    };

    this.getWordLevels = function (){
        return $http({
            method: 'GET',
            url: prefix+'/api/words/levels'
        });
    };
    this.getWordsForLevel = function (level){
        return $http({
            method: 'GET',
            url: prefix+'/api/words/'+level
        });
    };

    this.deleteWord = function(praise){
        return $http({
            method: 'DELETE',
            params: {
                id: praise.id
            },
            url: prefix+'/api/words'
        });
    }

});