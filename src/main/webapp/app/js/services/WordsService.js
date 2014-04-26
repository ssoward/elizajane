angular.module('myApp').service('WordsService', function ($http, $log) {

    this.saveWord = function(word){
        return $http({
            method: 'POST',
            data: word,
            url: '/api/words'
        });
    }

    this.getAllWords = function (){
        return $http({
            method: 'GET',
            url: '/api/words'
        });
    };

    this.getWordLevels = function (){
        return $http({
            method: 'GET',
            url: '/api/words/levels'
        });
    };
    this.getWordsForLevel = function (level){
        return $http({
            method: 'GET',
            url: '/api/words/'+level
        });
    };

    this.deleteWord = function(praise){
        return $http({
            method: 'DELETE',
            params: {
                id: praise.id
            },
            url: '/api/words'
        });
    }

});