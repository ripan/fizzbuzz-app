﻿(function() {
    'use strict';

    describe('Controller: FizzBuzzCtrl', function() {

        beforeEach(angular.mock.module('FizzBuzzModule'));

        var FizzBuzzCtrl, FizzBuzz, $httpBackend, scope;

        beforeEach(inject(function($rootScope, $controller, _$httpBackend_) {
            $httpBackend = _$httpBackend_;

            scope = $rootScope.$new();

            var data = [{ "id": 1, "name": 1, "isFavourite": false }, { "id": 2, "name": 2, "isFavourite": false }, { "id": 3, "name": "Fizz", "isFavourite": false }, { "id": 4, "name": 4, "isFavourite": false }, { "id": 5, "name": "Buzz", "isFavourite": false }, { "id": 6, "name": "Fizz", "isFavourite": false }, { "id": 7, "name": 7, "isFavourite": false }, { "id": 8, "name": 8, "isFavourite": false }, { "id": 9, "name": "Fizz", "isFavourite": false }, { "id": 10, "name": "Buzz", "isFavourite": false }, { "id": 11, "name": 11, "isFavourite": false }, { "id": 12, "name": "Fizz", "isFavourite": false }, { "id": 13, "name": 13, "isFavourite": false }, { "id": 14, "name": 14, "isFavourite": false }, { "id": 15, "name": "FizzBuzz", "isFavourite": false }, { "id": 16, "name": 16, "isFavourite": false }, { "id": 17, "name": 17, "isFavourite": false }, { "id": 18, "name": "Fizz", "isFavourite": false }, { "id": 19, "name": 19, "isFavourite": false }, { "id": 20, "name": "Buzz", "isFavourite": false }, { "id": 21, "name": "Fizz", "isFavourite": false }, { "id": 22, "name": 22, "isFavourite": false }, { "id": 23, "name": 23, "isFavourite": false }, { "id": 24, "name": "Fizz", "isFavourite": false }, { "id": 25, "name": "Buzz", "isFavourite": false }, { "id": 26, "name": 26, "isFavourite": false }, { "id": 27, "name": "Fizz", "isFavourite": false }, { "id": 28, "name": 28, "isFavourite": false }, { "id": 29, "name": 29, "isFavourite": false }, { "id": 30, "name": "FizzBuzz", "isFavourite": false }, { "id": 31, "name": 31, "isFavourite": false }, { "id": 32, "name": 32, "isFavourite": false }, { "id": 33, "name": "Fizz", "isFavourite": false }, { "id": 34, "name": 34, "isFavourite": false }, { "id": 35, "name": "Buzz", "isFavourite": false }, { "id": 36, "name": "Fizz", "isFavourite": false }, { "id": 37, "name": 37, "isFavourite": false }, { "id": 38, "name": 38, "isFavourite": false }, { "id": 39, "name": "Fizz", "isFavourite": false }, { "id": 40, "name": "Buzz", "isFavourite": false }, { "id": 41, "name": 41, "isFavourite": false }, { "id": 42, "name": "Fizz", "isFavourite": false }, { "id": 43, "name": 43, "isFavourite": false }, { "id": 44, "name": 44, "isFavourite": false }, { "id": 45, "name": "FizzBuzz", "isFavourite": false }, { "id": 46, "name": 46, "isFavourite": false }, { "id": 47, "name": 47, "isFavourite": false }, { "id": 48, "name": "Fizz", "isFavourite": false }, { "id": 49, "name": 49, "isFavourite": false }, { "id": 50, "name": "Buzz", "isFavourite": false }, { "id": 51, "name": "Fizz", "isFavourite": false }, { "id": 52, "name": 52, "isFavourite": false }, { "id": 53, "name": 53, "isFavourite": false }, { "id": 54, "name": "Fizz", "isFavourite": false }, { "id": 55, "name": "Buzz", "isFavourite": false }, { "id": 56, "name": 56, "isFavourite": false }, { "id": 57, "name": "Fizz", "isFavourite": false }, { "id": 58, "name": 58, "isFavourite": false }, { "id": 59, "name": 59, "isFavourite": false }, { "id": 60, "name": "FizzBuzz", "isFavourite": false }, { "id": 61, "name": 61, "isFavourite": false }, { "id": 62, "name": 62, "isFavourite": false }, { "id": 63, "name": "Fizz", "isFavourite": false }, { "id": 64, "name": 64, "isFavourite": false }, { "id": 65, "name": "Buzz", "isFavourite": false }, { "id": 66, "name": "Fizz", "isFavourite": false }, { "id": 67, "name": 67, "isFavourite": false }, { "id": 68, "name": 68, "isFavourite": false }, { "id": 69, "name": "Fizz", "isFavourite": false }, { "id": 70, "name": "Buzz", "isFavourite": false }, { "id": 71, "name": 71, "isFavourite": false }, { "id": 72, "name": "Fizz", "isFavourite": false }, { "id": 73, "name": 73, "isFavourite": false }, { "id": 74, "name": 74, "isFavourite": false }, { "id": 75, "name": "FizzBuzz", "isFavourite": false }, { "id": 76, "name": 76, "isFavourite": false }, { "id": 77, "name": 77, "isFavourite": false }, { "id": 78, "name": "Fizz", "isFavourite": false }, { "id": 79, "name": 79, "isFavourite": false }, { "id": 80, "name": "Buzz", "isFavourite": false }, { "id": 81, "name": "Fizz", "isFavourite": false }, { "id": 82, "name": 82, "isFavourite": false }, { "id": 83, "name": 83, "isFavourite": false }, { "id": 84, "name": "Fizz", "isFavourite": false }, { "id": 85, "name": "Buzz", "isFavourite": false }, { "id": 86, "name": 86, "isFavourite": false }, { "id": 87, "name": "Fizz", "isFavourite": false }, { "id": 88, "name": 88, "isFavourite": false }, { "id": 89, "name": 89, "isFavourite": false }, { "id": 90, "name": "FizzBuzz", "isFavourite": false }, { "id": 91, "name": 91, "isFavourite": false }, { "id": 92, "name": 92, "isFavourite": false }, { "id": 93, "name": "Fizz", "isFavourite": false }, { "id": 94, "name": 94, "isFavourite": false }, { "id": 95, "name": "Buzz", "isFavourite": false }, { "id": 96, "name": "Fizz", "isFavourite": false }, { "id": 97, "name": 97, "isFavourite": false }, { "id": 98, "name": 98, "isFavourite": false }, { "id": 99, "name": "Fizz", "isFavourite": false }, { "id": 100, "name": "Buzz", "isFavourite": false }]

            FizzBuzzCtrl = $controller('FizzBuzzCtrl', { $scope: scope, FizzBuzz: FizzBuzz });
        }));

        it('should have scope defined', function() {
            expect(scope).toBeDefined();
        });

        it('should have data', function() {
            expect(scope.data.length).toBeGreaterThan(0);
        });

        describe('valid response data', function() {

            it('should have 10 records if viewing value is 10 and page size is 10', function() {
                expect(scope.data.length).toBe(10);
            });

            it('should have 10 records if viewing value is 100 and page size is 10', function() {
                expect(scope.data.length).toBe(10);
            });

        });

    });


})();
