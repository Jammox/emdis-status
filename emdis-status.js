/*
 * emdis-status
 *
 * Provides EMDIS hub status information from Ester via a web service
 *  
 * Copyright (c) 2018 James Fitches (J^F)
 * 
 * 2018/05/24 - 1.0.0.0 - J^F > Initial version
 * 
 * URL: http://localhost:port/status
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 */

'use strict';

var debug = require('debug')('emdis-status');
var express = require('express');
var bodyParser = require('body-parser');

// load config
var config = require('./conf/config');

// fire up express
var app = express();

// check port setting
if (typeof config.service.port == 'undefined' || !config.service.port) {
	debug('Valid port number required.');
	process.exit(0);
}

// Trust proxy if defined - allows correct X-Forwarded-For header
if (typeof config.service.proxy !== 'undefined' && config.service.proxy) {
	app.set('trust proxy', config.service.proxy);
	debug("emdis-status is being proxied via " + config.service.proxy);
}

// init json body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// import routes
var routes = require('./api/routes/emdisStatusRoutes');

// register routes
routes(app);

// ignition on
app.listen(config.service.port, () =>
	debug('emdis-status is listening on port ' + config.service.port));
