angular.module('quizApp').config( ['$routeProvider', '$locationProvider', function config($routeProvider, $locationProvider){
    $routeProvider.when('/question/:questionId', {
        templateUrl: 'views/quiz.html',
        controller: 'questionCntrl'
    })
    .when('/result', {
        templateUrl: 'views/result.html',
        controller: 'resultCntrl'
    })
    .when('/', {
        templateUrl: 'views/startquiz.html'
    })
    $locationProvider.html5Mode(false)
}]);