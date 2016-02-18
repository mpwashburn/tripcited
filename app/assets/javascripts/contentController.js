(function() {
'use strict';
app.controller('tripcited', tripcited)

contentController.$inject = ['$http'];

function ContentController($http) {
        var vm = this;

        vm.test = 'This is only a test...';
    }


$http.get('http://tripcited.herokuapp.com/api/contents')
  .success(function(data) {
           vm.allContents = data;
       })
})();
