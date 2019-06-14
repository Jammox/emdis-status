/*
 * emdisStatusModel.js
 * 
 * 2018/05/24 - 1.0.0 - J^F > Initial version
 * 
 */

'use strict';

var debug = require('debug')('emdis-status:emdisStatusModel');
var Firebird = require('node-firebird');

// load config
var config = require('../../conf/config');

// get hub status data from Ester
exports.loadData = function (req, res, next) {
	var query = "SELECT hub, outseqnum, inseqnum, outdate, indate, lastrecvdate, lastsenddate, activehub FROM emdiscount";

	if (typeof req.params.Hub !== 'undefined' && req.params.Hub) {
		query += " WHERE UPPER(hub) = '" + req.params.Hub.toUpperCase() + "'";
	}

	Firebird.attach(config.dboptions, function (err, db) {
		if (err) {
			debug('DB error: ' + err.stack);
			return res.status(500).send({ message: 'Internal Error!' });
		}

		db.query(
			query,
			function (err, result) {
				db.detach();

				if (err) {
					debug('Query error: ' + err.stack);
					return res.status(500).send({ message: 'Internal Error!' });
				}

				if (!result.length) {
					res.status(404).send({ message: 'Not Found' });
					return next();
				}

				res.json(result);
			})
	});
};
