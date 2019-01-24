angular.module('quizApp').controller('resultCntrl', ['$scope','$location','questionSrvc', function($scope,$location, questionSrvc){
    const nulifiedCount = 0;
    $scope.count = questionSrvc.getCount();
    $scope.home = function(){
        questionSrvc.setCount(nulifiedCount)
        $location.path('/')
    }
    if($scope.count < 3) {
        $scope.resultImage = 'images/you-are-cock.jpg'
    } else $scope.resultImage = 'images/duhar.jpg'
}])