var app = angular.module("app", []);


function NavBar($scope) {
  $scope.currentNavItem = 'page1';

  $scope.goto = function(page) {
    console.log("Goto " + page);
  }
}


app.controller("HelloController", function($scope) {
  $scope.message = "Hello, AngularJS";
})

app.controller("NavBar", function($scope) {
  $scope.currentNavItem = 'page1';

  $scope.goto = function(page) {
    console.log("Goto " + page);
  }
})
