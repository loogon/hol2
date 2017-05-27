angular.module('app')
.controller('MainController', ['$scope', function($scope) {
  $scope.filePath = "..";
  $scope.load = function() {
    alert('load path');
  };
}]);