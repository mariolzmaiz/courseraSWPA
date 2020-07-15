(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.items = "";
  $scope.result = "";

  $scope.sayMessage = function () {
    return "Yaakov likes to eat healthy snacks at night!";
  };

  $scope.howMuch = function () {
    var option = calculateNumericForString($scope.items);
    $scope.result = option;
  };

  function calculateNumericForString(string) {
    var items = string.split(',');
    if (Object.keys(items).length == 1 && items[0] == "") {
    	return  "Please enter data first";
    }
    else if (Object.keys(items).length <= 3) {
    	return  "Enjoy!";
    }
    else {
    	return "Too much!";
    }
  
  }
}

})();
