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

const _ = require('underscore');
const path = require('path');

module.exports = _ // eslint-disable-next-line import/no-dynamic-require
  .extend(require(path.join(__dirname, `/env/${process.env.NODE_ENV}.json`)) || {}); // eslint-disable-line global-require
