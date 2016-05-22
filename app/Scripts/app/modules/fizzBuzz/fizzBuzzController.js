(function () {
    'use strict';

    angular.module('FizzBuzzModule').controller('FizzBuzzCtrl', ['$scope', 'FizzBuzz', function ($scope, FizzBuzz) {

        $scope.isLoading = true;
        $scope.totalItems = 64;
        $scope.currentPage = 1;
        $scope.pageSize = 25;
        
        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.getData = function () {
            alert($scope.currentPage +  "-" + $scope.pageSize);
            FizzBuzz.query({page:$scope.currentPage, page_size:$scope.pageSize},function (response) {
                $scope.isLoading = false;
                $scope.data = response;
            }, function (error) {
                console.log(error)
            });
        };

        $scope.$watch('currentPage', function(newValue, oldValue) {
            $scope.getData();
        });

        $scope.$watch('pageSize', function(newValue, oldValue) {
            $scope.getData();
        });

    }]);

})();