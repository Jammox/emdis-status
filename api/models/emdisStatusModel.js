/*
 * emdisStatusModel.js
 *
 * 2018/05/24 - 1.0.0 - J^F > Initial version
 *
 */

const debug = require('debug')('emdis-status:emdisStatusModel');
const chalk = require('chalk');
const Firebird = require('node-firebird');

// load config
const config = require('../../conf/config');

// get hub status data from Ester
exports.loadData = (req, res) => {
  let query = 'SELECT hub, outseqnum, inseqnum, outdate, indate, lastrecvdate, lastsenddate, activehub FROM emdiscount';
  const hub = (req.params.Hub || '').toUpperCase();

  if (hub) {
    query += ' WHERE UPPER(hub) = ?';
  }

  // eslint-disable-next-line consistent-return
  Firebird.attach(config.dboptions, (err, db) => {
    if (err) {
      debug(`${chalk.redBright('DbException')}: ${err.stack}`);
      return res.status(500).send({ message: 'Internal Error!' });
    }

    db.query(query, [hub], (err, result) => {
      db.detach();

      if (err) {
        debug(`${chalk.redBright('QueryException')}: ${err.stack}`);
        return res.status(500).send({ message: 'Internal Error!' });
      }

      if (!result.length) {
        return res.status(404).send({ message: 'Not Found' });
      }

      return res.status(200).send(result);
    });
  });
};
