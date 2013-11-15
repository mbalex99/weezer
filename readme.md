


Try to run this website locally under an HTTP Server 

Easiest way is using a simple http server with either Node or Python

If you have node:

    $ sudo npm install -g http-server
    $ http-server

If you have python

	$ python -m SimpleHTTPServer 8080


Choose your preferred port!

-----------------------------------------------------------------------

This is the [Markit On Demand Json Api](http://dev.markitondemand.com/)

To query for a specific stock symbol follow this pattern

	http://dev.markitondemand.com/Api/v2/Lookup/json?input=NFLX