/*
 * emdisStatusController
 * 
 * 2018/05/24 - 1.0.0 - J^F > Initial version
 * 
 */

'use strict';

var model = require('../models/emdisStatusModel');

exports.getStatus = function (req, res, next) {
	model.loadData(req, res, next);
};
