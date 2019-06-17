/*
 * emdisStatusRoutes.js
 * 
 * 2018/05/24 - 1.0.0 - J^F > Initial version
 * 
 * URL: http://localhost:port/status
 * 
 */

'use strict';

var control = require('../controllers/emdisStatusController');

module.exports = function (app) {

	// default route, return all hubs
	app.route('/status')
		.get(control.getStatus);

	// return specified hub only
	app.route('/status/:Hub')
		.get(control.getStatus);

};
