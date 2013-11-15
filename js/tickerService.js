app.factory('tickerService', function($q){

	var getStockQuote = function(symbol){
		var deferred = $q.defer();

		deferred.resolve([
				{price: 45},
				{price: 30},
				{price: 20},
				{price: 90}
			])

		return deferred.promise;
	};

	return {
		getStockQuote: getStockQuote
	};
});