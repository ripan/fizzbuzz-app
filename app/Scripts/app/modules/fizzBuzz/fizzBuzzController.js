﻿(function() {
    'use strict';

    angular.module('FizzBuzzModule').controller('FizzBuzzCtrl', ['$scope', 'FizzBuzz', function($scope, FizzBuzz) {

        $scope.isLoading = true;
        $scope.totalItems = 64;
        $scope.currentPage = 1;
        $scope.pageSize = 100;
        $scope.pageSizeOptions = [10, 25, 50, 100];
        $scope.maxViewingValue = 100;
        $scope.viewingValues = [10, 100, 1000, 10000, 100000000000];
        $scope.favourities = [];

        $scope.setPage = function(pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.getData = function() {
            $scope.isLoading = true;
            FizzBuzz.query({ page: $scope.currentPage, page_size: $scope.pageSize, maxViewingValue: $scope.maxViewingValue }, function(response) {
                $scope.isLoading = false;
                $scope.data = response;
            }, function(error) {
                console.log(error);
                $scope.isLoading = false;
            });
        };

        $scope.$watch('currentPage', function(newValue, oldValue) {
            $scope.getData();
        });

        $scope.$watch('pageSize', function(newValue, oldValue) {
            $scope.getData();
        });

        $scope.preserveSelection = function(e) {
            if(!_.contains($scope.favourities, this.item.id)){
                $scope.favourities.push(this.item.id);
            }
        };

        $scope.$watch('maxViewingValue', function(newValue, oldValue) {
            $scope.getData();
            $scope.totalItems = newValue;
        });

    }]);

})();
