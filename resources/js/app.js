"use strict";

angular.module('myApp', []);

angular.module('myApp').controller('MainController', ['$scope', '$interval', function($scope, $interval) {

  //Hello World function
  $scope.message = function(name){
    return "Hello, " + name + ".";
  }

  //Executing Scope Functions
  var items = ['bananas', 'apples', 'pears', 'cherries', 'peaches'];

  $scope.itemIndex = null;
  $scope.currentItem = '';

  $scope.getItem = function() {
    $scope.currentItem = items[$scope.itemIndex];
  }

  $interval(function() {
    $scope.itemIndex = Math.round( Math.random() * (items.length - 1) );
    $scope.getItem();
  }, 2000);

  //Working with Bracketed Expressions
  $scope.randomValue = -999;

  $interval(function() {
    $scope.randomValue = Math.round(Math.random() * 1000000);
  }, 2000);
}]);

angular.module('myApp').controller('ParentController', ['SharedService', function(SharedService) {

  this.model = SharedService;

}]);

angular.module('myApp').controller('ChildController', [function() {
  this.name = 'Miles'
}]);

angular.module('myApp').service('SharedService', function() {
  return {name: 'Bill Johnson'};
});
