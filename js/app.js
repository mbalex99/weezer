
var app = angular.module('myApp', []);


app.controller('homeController', function($scope){

	$scope.people = [
		{
			name: "Max",
			age: 23
		},
		{
			name: "Mary",
			age: 90
		},
		{
			name: "John",
			age: 12
		}
	];

});
