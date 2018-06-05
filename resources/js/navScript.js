(function() {
  'use strict';

  angular.module('navBarDemoBasicUsage', ['ngMaterial'])
      .controller('NavBar', NavBar);

  function NavBar($scope) {
    $scope.currentNavItem = 'home';

    $scope.goto = function(page) {
      console.log("Goto " + page);
    }
  }
})();
