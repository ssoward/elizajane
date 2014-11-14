angular.module('myApp').controller('AdminWordsController', function ($scope, WordsService, AdminService, $log, $rootScope){

    function init(){
        WordsService.getWordLevels()
            .then(function(res){
                $scope.levels = res.data;
            });
    };

//Need to init after all functions have been loaded into the scope.
    init();

    $scope.alerts = [
//        { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' }
//        { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
    ];

    $scope.myFunct = function(ev, key) {
        if (ev.which==13 && key==='word')
            $scope.save();
    };

    $scope.getWordsForLevel = function(){
        WordsService.getWordsForLevel($scope.wordsLevel)
        .then(function(res){
            $scope.words = res.data;
            $scope.newword = null;
        });
    };
    $scope.save = function() {
        WordsService.saveWord($scope.newword)
            .then(function(res){
                $scope.wordsLevel = $scope.newword.level;
                $scope.getWordsForLevel();
            })
    };

    $scope.deleteWord = function(comp) {
        WordsService.deleteWord(comp)
            .then(function(res){
                $scope.getWordsForLevel();
            });
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
});
