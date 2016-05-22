(function () {
	'use strict';

	var ProdUrl = 'https://fizzbuzz-app.herokuapp.com/api/v1/fizzbuzz/list';
	var DevUrl = 'http://fizzbuzz.dev/api/v1/fizzbuzz/list';

	angular.module('FizzBuzzModule').factory("FizzBuzz", ['$resource', function ($resource) {
		return $resource(DevUrl, { id: '@id' }, {
			update: { method: 'PATCH' },
		});
	}]);

})();