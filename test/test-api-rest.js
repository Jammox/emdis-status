/*
 * test-api-rest.js
 *
 * 2019/06/14 - 1.0.0 - J^F > Initial version
 *
 * https://www.chaijs.com/guide/
 * https://www.chaijs.com/plugins/chai-http/
 *
 */

const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
const { expect } = chai;

chai.use(chaiHttp);

const server = 'http://localhost:3000';
const testhub = 'WA';

function validateRestResponse(res, status) {
  res.should.have.status(status);
  res.should.be.json;

  expect(res.body)
    .to.be.an.instanceof(Array)
    .and.to.have.property(0)
    .that.includes.all.keys(['HUB', 'OUTSEQNUM', 'INSEQNUM', 'OUTDATE', 'INDATE', 'LASTRECVDATE', 'LASTSENDDATE', 'ACTIVEHUB']);
}

describe('emdis-status REST api', () => {
  it('should list ALL hub statuses on /status GET', (done) => {
    // make request
    chai.request(server)
      .get('/status')
      .end((err, res) => {
        expect(err).to.be.null;
        validateRestResponse(res, 200);
        done();
      });
  });

  it('should list a SINGLE hub status on /status/<hub id> GET', (done) => {
    // make request
    chai.request(server)
      .get(`/status/${testhub}`)
      .end((err, res) => {
        expect(err).to.be.null;
        validateRestResponse(res, 200);
        done();
      });
  });
});
