angular.module('tripcited', ['ui.router'])
  .config('MainRouter');

function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home',{
      url: "/",
      templateUrl: 'contents_index.html'
    })

    // .state('new',{
    //   url: "/new",
    //   templateUrl: 'contents_index.html'
    // })
    $urlRouterProvider.otherwise("/");
}
