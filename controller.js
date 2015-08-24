var myApp = angular.module('myApp',[]);

myApp.controller('MainControl', function($scope, $location) {
  $scope.nameName = "yr";
  $scope.fruits = ['apple', 'orange', 'pear', 'grapefruit'];
});
