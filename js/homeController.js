app.controller('homeController', function($scope){

	$scope.title = "Welcome to the home page";

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
