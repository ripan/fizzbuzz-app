(function () {
    'use strict';

    angular.module('FizzBuzzModule').directive('fizzBuzzList', function () {
        return {
            restrict: 'AE',
            templateUrl: 'Scripts/app/modules/fizzBuzz/templates/list.html'
        };
    });

})();