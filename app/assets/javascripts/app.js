var app = angular.module('tripcited', [])
app.config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home',{
      url: "/home",
      templateUrl: 'home/_home.html'
    })
    $urlRouterProvider.otherwise("/");
}
