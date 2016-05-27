(function() {
    'use strict';

    angular.module('FizzBuzzModule').controller('FizzBuzzCtrl', ['$scope', 'FizzBuzz', function($scope, FizzBuzz) {

        $scope.isLoading = true;
        $scope.totalItems = 100;
        $scope.currentPage = 1;
        $scope.itemsPerPage = 100;
        $scope.itemsPerPageOptions = [10, 25, 50, 100];
        $scope.maxViewingValue = 100;
        $scope.viewingValues = [10, 100, 1000, 10000, 100000000000];
        $scope.favourities = [];
        $scope.numPages = 2;

        $scope.setPage = function(pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.getData = function() {
            $scope.isLoading = true;
            FizzBuzz.query({ page: $scope.currentPage, page_size: $scope.itemsPerPage, maxViewingValue: $scope.maxViewingValue }, function(response) {
                $scope.isLoading = false;
                $scope.data = _.map(response, function(item, index) {
                    return _.extend(item, { isFavourite: _.contains($scope.favourities, item.id) })
                });
            }, function(error) {
                console.log(error);
                $scope.isLoading = false;
            });
        };

        $scope.$watch('currentPage', function(newValue, oldValue) {
            $scope.getData();
        });

        $scope.$watch('itemsPerPage', function(newValue, oldValue) {
            $scope.getData();
        });

        $scope.preserveSelection = function(e) {
            var id = this.item.id;
            if (!_.contains($scope.favourities, id)) {
                $scope.favourities.push(id);
            } else {
                var index = $scope.favourities.indexOf(id);
                if (index > -1) {
                    $scope.favourities.splice(index, 1);
                };
            }
        };

        $scope.$watch('maxViewingValue', function(newValue, oldValue) {
            $scope.totalItems = newValue;
            $scope.getData();
        });

        $scope.clearFavourities = function() {
            $scope.favourities = [];
            _.map($scope.data, function(item, index) {
                _.extend(item, { isFavourite: false });
            });
        };


    }]);

})();
