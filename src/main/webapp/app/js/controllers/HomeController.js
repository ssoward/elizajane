angular.module('myApp').controller('HomeController', function ($scope, WordsService, GiveService, AdminService, $log){
    $scope.greeting = 'Hello, world';
    $scope.allWords = [];
    $scope.words = [];
    $scope.index = 0;
    $scope.left = 0;

    $scope.alerts = [
//        { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
//        { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
    ];

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };

    $scope.clearMessage = function(){
        $scope.alerts = [];
    };

    $scope.showMessage = function(typee, msgg){
        $scope.alerts = [];
        $scope.alerts.push({type: typee, msg: msgg});
    };

    $scope.nextWord = function(){
        $scope.index++;
        if( $scope.index<$scope.words.length) {
            $scope.currentWord = $scope.words[ $scope.index];
            $scope.left = $scope.words.length - ($scope.index)-1;
        }else{
            $scope.index--;
            $scope.currentWord = 'FINISHED!';
            $scope.left = 0 ;
        }
    };

    function init(){
        getWords();
    }
    $scope.fetchList = function(){
        $scope.words = [];
        $scope.index = 0;
        $scope.left = 0;
        WordsService.getWordsForLevel($scope.word.level)
            .then(function(res){
                $scope.newword = null;
                angular.forEach(res.data, function(value, key){
                    this.push(value.name);
                }, $scope.words);
                $scope.currentWord = $scope.words[ $scope.index];
                $scope.left = $scope.words.length - ($scope.index)-1;
            });
    };

    function getWords(){
        WordsService.getWordLevels()
            .then(function(res){
                $scope.levels = res.data;
            });
    }

    init();

});
