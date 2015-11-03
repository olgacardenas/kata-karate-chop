describe('MyTestCtrl', function () {

  var $scope, controller;
  var $controller;

  beforeEach(module('clinicatdd.filters'));

  describe("when there is no info", function () {

    beforeEach(inject(function (_$controller_) {
      $controller = _$controller_;
    }));

    beforeEach(function () {
      $scope = {};
      controller = $controller('MyTestCtrl', {$scope: $scope});
    });

    it("should contain a chop method", function () {
      expect($scope.chop).toBeDefined();
    });

    it('should return -1 for an empty array', function () {
      expect($scope.chop(5, [])).toBe(-1);
    });

    it('should return -1 for an not empty array', function () {
      expect($scope.chop(1, [2, 3, 5])).toBe(-1);
    });

    it('should return -1 for an not empty array', function () {
      expect($scope.chop(6, [2, 3, 5])).toBe(-1);
    });

    it('should return 0 if exists in 0 position', function () {
      expect($scope.chop(3, [3])).toBe(0);
    });

    it('should return 2 if exists in 2 position', function () {
      expect($scope.chop(3, [1, 2, 3])).toBe(2);
    });

    it('should return 2 if exists in 2 position', function () {
      expect($scope.chop(3, [1, 2, 3, 4])).toBe(2);
    });

    it('should return 1 if exists in 1 position', function () {
      expect($scope.chop(3, [1, 3, 8])).toBe(1);
    });
  });
});
