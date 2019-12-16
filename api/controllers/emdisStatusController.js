/*
 * emdisStatusController
 *
 * 2018/05/24 - 1.0.0 - J^F > Initial version
 *
 */

const model = require('../models/emdisStatusModel');

exports.getStatus = (req, res) => {
  model.loadData(req, res);
};
