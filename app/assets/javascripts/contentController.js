angular.module('tripcited').controller('ContentController', ContentController)

ContentController.$inject = ['$http'];

function ContentController($http){
  var vm = this;
  vm.allContents = true;
  vm.newContents = {};
  vm.addContents = addContents;
  vm.deleteContents = deleteContents;
  vm.getData = getData;


  vm.getData = function(){
    $http.get('http://localhost:3000/api/contents')
      .success(function(data) {
        console.log(data);
        vm.allContents = data;
      });
  }

  vm.addContents = function () {
    $http
    .post('http://localhost:3000/api/contents', self.newContents)
    .then(function(response){
      getData();
    });
    self.newContents = {};
  };

  // vm.deleteContents(contents){
  //   $http
  //   .delete('http://localhost:3000/api/contents' + contents._id)
  //   .then(function(response){
  //     var index = self.all.indexOf(contents);
  //     self.all.splice(index, 1);
  //   });
  // }

}
