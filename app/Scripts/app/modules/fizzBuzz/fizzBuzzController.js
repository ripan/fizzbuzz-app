(function () {
    'use strict';

    angular.module('FizzBuzzModule').controller('FizzBuzzCtrl', ['$scope', 'FizzBuzz', function ($scope, FizzBuzz) {

        $scope.isLoading = true;
        $scope.totalItems = 64;
        $scope.currentPage = 1;
        
        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.$watch('currentPage', function(newValue, oldValue) {
            FizzBuzz.query({page:$scope.currentPage},function (response) {
                $scope.isLoading = false;
                $scope.data = response;
            }, function (error) {
                console.log(error)
            });
        });

    }]);

})();