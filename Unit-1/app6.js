var app = angular.module("Part6", []);

app.controller("EventsExercise", function($scope) {
  $scope.backwards = false;

  $scope.pickRandomNumber = function() {
    $scope.number = Math.floor(Math.random() * 10) + 1;
  };

  $scope.reverseStr = function() {
    $scope.revStr = $scope.revStr.split('').reverse().join('');
  };
});
