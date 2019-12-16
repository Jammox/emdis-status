/*
 * emdis-status
 *
 * Provides EMDIS hub status information from Ester via a web service
 *
 * Copyright (c) 2018 James Fitches (J^F)
 *
 * 2018/05/24 - 1.0.0 - J^F > Initial version
 *
 * URL: http://localhost:port/status
 *
 */

const debug = require('debug')('emdis-status');
const chalk = require('chalk');
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./api/routes/emdisStatusRoutes');

// load config
const config = require('./conf/config');

// fire up express
const app = express();

// check port setting
if (typeof config.service.port === 'undefined' || !config.service.port) {
  debug(chalk.redBright('Valid port number required.'));
  process.exit(0);
}

// Trust proxy if defined - allows correct X-Forwarded-For header
if (typeof config.service.proxy !== 'undefined' && config.service.proxy) {
  app.set('trust proxy', config.service.proxy);
  debug(`links is being proxied via ${chalk.green(config.service.proxy)}`);
}

// init json body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// register routes
routes(app);

// ignition on
app.listen(config.service.port, () => debug(
  `emdis-status is listening on port ${chalk.green(config.service.port)}`
));
