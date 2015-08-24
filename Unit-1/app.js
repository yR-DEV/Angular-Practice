var app = angular.module("firstApp", []);
app.controller("MyFirstController", function($scope){
	$scope.name = "Severus Snape";
});

app.controller("ExercisesController", function($scope) {
  $scope.favColor = "Green";
  $scope.secondsInACentury = (60 * 60 * 24 * 365 * 100);
  $scope.rightNow = new Date();
  $scope.colors = ['red', 'green', 'blue', 'purple', 'orange'];
  $scope.symbols = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  $scope.count = [1,1,2,5,6,9,9,9];


});
