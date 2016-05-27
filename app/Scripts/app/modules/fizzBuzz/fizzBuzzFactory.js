(function () {
	'use strict';
	
    var apiUrl; 
	if (window.location.hostname == "fizzbuzz-app.herokuapp.com"){
		apiUrl = 'https://fizzbuzz-app.herokuapp.com/api/v1/fizzbuzz/list';
	}else{
		apiUrl = 'http://fizzbuzz.dev/api/v1/fizzbuzz/list'
	}

	angular.module('FizzBuzzModule').factory("FizzBuzz", ['$resource', function ($resource) {
		return $resource(apiUrl, { id: '@id' }, {
			update: { method: 'PATCH' },
		});
	}]);

})();