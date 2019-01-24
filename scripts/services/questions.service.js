angular.module('quizApp').service('questionSrvc', ['$http', function($http){
    let count = 0;
    this.increaseCount = function(){
        count++
    }
    this.setCount = function(setedCount){
        count = setedCount;
    }
    this.getCount = function(){
        return count
    }
}])