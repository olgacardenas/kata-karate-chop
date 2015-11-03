angular.module('clinicatdd.filters')
  .controller('MyTestCtrl', ['$scope', function ($scope, myinfo) {
    $scope.chop = function (needle, haystack) {
      return recursive(needle, haystack, 0, haystack.length);
    };

    var recursive = function (needle, haystack, initPos, endPos) {
      var middle = parseInt((endPos + initPos) / 2);

      if (haystack.length === 0) {
        return -1;
      }
      else if (haystack[middle] === needle) {
        return middle;
      }
      else if (initPos == endPos) {
        return haystack[initPos] === needle ? initPos : -1;
      }
      else if (haystack[middle] < needle) {
        return recursive(needle, haystack, middle+1, haystack.length);
      }
      else if (haystack[middle] > needle) {
        return recursive(needle, haystack, 0, middle);
      }
      else {
        return -1;
      }
    }

  }]);
