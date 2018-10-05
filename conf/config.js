/*
 * config.js
 * 
 * Load service configuration based on NODE_ENV environment variable setting
 * 
 * e.g.:
 * 
 * Bash:
 * export NODE_ENV=development|production
 * 
 * PowerShell:
 * $env:NODE_ENV = "development|production"
 * 
 * 2018/07/01 - 1.0.0 - J^F > Initial version
 * 
 */

var _ = require('underscore');

module.exports = _.extend(
	require(__dirname + '/../conf/env/' + process.env.NODE_ENV + '.json') || {});
