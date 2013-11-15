var request = require('request');
var q = require('q');

var apiRootUrl = "http://query.yahooapis.com/v1/public/yql";

exports.getStock = function(ticker){

    var deferred = q.defer();

    var url = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22'+ ticker +'%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json';

    request(url, function(error, response, body){
        if (!error && response.statusCode == 200) {
            deferred.resolve(JSON.parse(body));
        }else{
            deferred.reject(error);
        }
    });

    return deferred.promise;
};

exports.getQuotes = function(ticker, start, end){
    var url = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22' + ticker +'%22%20and%20startDate%20=%20%22' + start + '%22%20and%20endDate%20=%20%22' + end +  '%22&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json';

    var deferred = q.defer();

    request(url, function(error, response, body){
        if (!error && response.statusCode == 200) {
            deferred.resolve(JSON.parse(body));
        }else{
            deferred.reject(error);
        }
    });

    return deferred.promise;
};