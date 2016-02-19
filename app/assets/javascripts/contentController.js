angular.module('tripcited').controller('ContentController', ContentController)

ContentController.$inject = ['$http'];

function ContentController($http){
  var vm = this;

  vm.test = 'This is only a test...';
  vm.allContents = true;

  vm.getData = function(){
    $http.get('http://localhost:3000/api/contents')
      .success(function(data) {
        console.log(data);
        vm.allContents = data;
      });
  }

}
