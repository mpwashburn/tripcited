angular.module('tripcited').controller('ContentController', ContentController)

ContentController.$inject = ['$http'];

function ContentController($http){
  var vm = this;

  vm.allContents = true;
  vm.newContents = {};
  vm.addContents = addContents;
  vm.deleteContents = deleteContents;
  vm.getData = getData;
  vm.content = {
    title: "",
    body: "",
    image_link: "",
    source: ""
  }


  function getData(){
    $http
    .get('http://localhost:3000/api/contents')
      .success(function(data) {
        console.log(data);
        vm.allContents = data;
      });
  }

  function addContents() {
    console.log(vm.content)
    $http
    .post('http://localhost:3000/api/contents', vm.content)
    .then(function(response){
      getData();
    });
    self.newContents = {};
  }

  function deleteContents(content){
    $http
    .delete('http://localhost:3000/api/contents/' + content.id)
    .then(function(response){
      var index = vm.allContents.indexOf(content);
      vm.allContents.splice(index, 1);
    });
  }

}
