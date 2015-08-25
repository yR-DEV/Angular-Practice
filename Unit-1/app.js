var cameras = [
  {
    title: "Nikon D3100 DSLR",
    image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
    rating: 3.4,
    price: 369.99,
    onSale: true
  },
  {
    title: "Canon EOS 70D",
    image: "http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg",
    rating: 2.0,
    price: 1099.0,
    onSale: false
  },
  {
    title: "Nikon D810A",
    image:"http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg",
    rating: 4.2,
    price: 3796.95,
    onSale: true
  }
];

var app = angular.module("firstApp", []);
app.controller("MyFirstController", function($scope){
	$scope.name = "Severus Snape";
});

app.controller("ExercisesController", function($scope) {
  // $scope.favColor = "Green";
  // $scope.secondsInACentury = (60 * 60 * 24 * 365 * 100);
  // $scope.rightNow = new Date();
  // $scope.colors = ['red', 'green', 'blue', 'purple', 'orange'];
  // $scope.symbols = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  //
  // $scope.count = [1,1,2,5,6,9,9,9];
  $scope.cameraData = cameras;
  $scope.options = ['price', 'rating'];

});
