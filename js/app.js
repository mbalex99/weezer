
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider
		.when('/', 
			{templateUrl: 'partials/homepage.html', 
			controller: 'homeController'})
		.when('/aboutus', {
			templateUrl: 'partials/aboutus.html',
			controller: 'aboutusController'
		});

});