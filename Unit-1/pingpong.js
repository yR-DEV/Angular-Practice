var app = angular.module("pingPong", []);

app.controller("Pong", function($scope) {
  $scope.p1Score = 0;
  $scope.p2Score = 0;

  $scope.p1Point = function() {
    if($scope.p1Score === 11) {
      $scope.p1Score = "Player 1 wins";
    }
    $scope.p1Score += 1;
  };

  $scope.p2Point = function() {
    if($scope.p2Score === 11) {
      $scope.p2Score = "Player 2 wins";
    }
    $scope.p2Score += 1;
  };

  $scope.reset = function() {
    $scope.p1Score = 0;
    $scope.p2Score = 0;
  };
});
