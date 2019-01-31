angular.module('quizApp').controller('questionCntrl',['$location','$http','$scope', 'questionSrvc', function($location, $http, $scope, questionSrvc){

    $scope.chooseOption = function(){
        if($scope.checked){
            if($scope.data.answer === $scope.checked){
                questionSrvc.increaseCount()
            }
            $location.path($scope.data.nextQuestionHref)
        }
    }
    function getRoute(){
        return ($location.url() + 'Question').slice(10)
    }

    $http.get('questions/questions.json')
    .then(function(response){
        $scope.data = response.data[getRoute()];
        
    })
}])