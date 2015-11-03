angular.module('clinicatdd.filters')
  .controller('MyTestCtrl', ['$scope', function ($scope, myinfo) {
    $scope.chop = function (needle, haystack) {
      var middle = Math.floor(haystack.length / 2);
      var init = haystack.slice(0, middle);
      var end = haystack.slice(middle + 1, haystack.length);

      if (haystack[middle] == needle) {
        return middle;
      }
      else if (haystack[middle] < needle){
        return $scope.chop(needle, end);
      }
      else if (haystack[middle] > needle)
      {
        return $scope.chop(needle, init)
      }
      else {
        return -1;
      }
    };
  }]);
