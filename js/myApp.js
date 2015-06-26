var app = angular.module('igSearch', []);

app.controller('MyCtrl', function ($scope) {

  $scope.tagSearch = function () {
    var inputCheck = /[A-Za-z]/;
    $scope.inputCheck = inputCheck;
    $scope.inputCheck = true;
    console.log('This all works here!');
  };


});
