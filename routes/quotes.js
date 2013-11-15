var stockService = require('../services/stockService')

exports.list = function(req, res){
    stockService.getQuotes(req.param('ticker'), req.query.start, req.query.end).then(function(data){
        res.send(data);
    }, function(error){
        res.send(error);
    });
};