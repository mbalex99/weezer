var stockService = require('../services/stockService')

exports.single = function(req, res){
    stockService.getStock(req.param('ticker')).then(function(data){
        var quote = data.query.results.quote;
        var formatted = {
            symbol: quote.symbol,
            name: quote.Name,
            daysLow: quote.DaysLow,
            daysHigh: quote.DaysHigh,
            yearLow: quote.YearLow,
            yearHigh: quote.YearHigh,
            change: quote.Change,
            earningsPersShare: quote.EarningsShare,
            marketCap: quote.MarketCapitalization,
            open: quote.Open,
            lastTradeTime: quote.LastTradeTime,
            dividendYield: quote.DividendYield,
            stockExchange: quote.StockExchange,
            percentChange: quote.PercentChange,
            priceToEarnings: quote.PERatio,
            volume: quote.Volume
        };
        res.send(formatted);
    }, function(error){
        res.send(error);
    });
};