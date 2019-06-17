/*
 * test-api-rest.js
 * 
 * 2019/06/14 - 1.0.0 - J^F > Initial version
 * 
 * https://www.chaijs.com/guide/
 * https://www.chaijs.com/plugins/chai-http/
 * 
 */

var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var expect = chai.expect;

chai.use(chaiHttp);

var server = 'http://localhost:3000';

describe('emdis-status REST api', function () {

	it('should list ALL hub statuses on /status GET', function (done) {
		// make request
		chai.request(server)
			.get('/status')
			.end(function (err, res) {
				expect(err).to.be.null;
				validateRestResponse(res, 200);
				done();
			});
	});

	it('should list a SINGLE hub status on /status/<hub id> GET', function (done) {
		// make request
		chai.request(server)
			.get('/status/de')
			.end(function (err, res) {
				expect(err).to.be.null;
				validateRestResponse(res, 200);
				done();
			});
	});

});

function validateRestResponse(res, status) {
	res.should.have.status(status);
	res.should.be.json;

	expect(res.body)
		.to.be.an.instanceof(Array)
		.and.to.have.property(0)
		.that.includes.all.keys(['HUB', 'OUTSEQNUM', 'INSEQNUM', 'OUTDATE', 'INDATE', 'LASTRECVDATE', 'LASTSENDDATE', 'ACTIVEHUB']);

};
