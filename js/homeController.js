app.controller('homeController', function($scope, tickerService){

	$scope.title = "Welcome to the home page";


	$scope.tickerSymbol = "";

	$scope.fetch = function(tickerSymbol){

		tickerService.getStockQuote(tickerSymbol)
			.then(function(data){
				$scope.result = data;
			}, function(error){
				alert('rejected! something went wrong');
			});

	};


});
