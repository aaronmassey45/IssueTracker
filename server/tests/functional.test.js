/*
*
*
*       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]-----
*       (if additional are added, keep them at the very end!)
*/

var chaiHttp = require('chai-http');
var chai = require('chai');
var assert = chai.assert;
var server = require('../server');

chai.use(chaiHttp);

describe('Functional tests', function(done) {
  let id1, id2;

  describe('POST /api/issues/{project} => object with issue data', function() {
    it('should have every field filled in', function(done) {
      chai
        .request(server)
        .post('/api/issues/test')
        .send({
          issue_title: 'Title',
          issue_text: 'text',
          created_by: 'Functional Test - Every field filled in',
          assigned_to: 'Chai and Mocha',
          status_text: 'In QA',
        })
        .end(function(err, res) {
          id1 = res.body._id;
          assert.equal(res.status, 200);
          assert.equal(res.body.issue_title, 'Title');
          assert.equal(res.body.issue_text, 'text');
          assert.equal(
            res.body.created_by,
            'Functional Test - Every field filled in'
          );
          assert.equal(res.body.assigned_to, 'Chai and Mocha');
          assert.equal(res.body.status_text, 'In QA');
          done();
        });
    });

    it('should have the required fields filled in', function(done) {
      chai
        .request(server)
        .post('/api/issues/test')
        .send({
          issue_title: 'Required',
          issue_text: 'Required fields only',
          created_by: 'Tester',
        })
        .end(function(err, res) {
          id2 = res.body._id;
          assert.equal(res.status, 200);
          assert.equal(res.body.issue_title, 'Required');
          assert.equal(res.body.issue_text, 'Required fields only');
          assert.equal(res.body.created_by, 'Tester');
          assert.equal(res.body.assigned_to, null);
          assert.equal(res.body.status_text, null);
          done();
        });
    });

    it('Missing required fields', function(done) {
      chai
        .request(server)
        .post('/api/issues/test')
        .send({})
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.isNotNull(res.body.errors, 'Fields are missing');
          done();
        });
    });
  });

  describe('PUT /api/issues/{project} => text', function() {
    it('No body', function(done) {
      chai
        .request(server)
        .put('/api/issues/test')
        .send({})
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.text, 'could not update undefined');
          done();
        });
    });

    it('One field to update', function(done) {
      chai
        .request(server)
        .put('/api/issues/test')
        .send({ id: id1, open: false })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.text, 'successfully updated');
          done();
        });
    });

    it('Multiple fields to update', function(done) {
      chai
        .request(server)
        .put('/api/issues/test')
        .send({
          id: id2,
          open: false,
          assigned_to: 'Tommy',
          status_text: 'Boogie',
        })
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.text, 'successfully updated');
          done();
        });
    });
  });

  describe('GET /api/issues/{project} => Array of objects with issue data', function() {
    it('No filter', function(done) {
      chai
        .request(server)
        .get('/api/issues/test')
        .query({})
        .end(function(err, res) {
          assert.equal(res.status, 200);
          assert.isArray(res.body);
          assert.property(res.body[0], 'issue_title');
          assert.property(res.body[0], 'issue_text');
          assert.property(res.body[0], 'created_on');
          assert.property(res.body[0], 'updated_on');
          assert.property(res.body[0], 'created_by');
          assert.property(res.body[0], 'assigned_to');
          assert.property(res.body[0], 'open');
          assert.property(res.body[0], 'status_text');
          assert.property(res.body[0], '_id');
          done();
        });
    });

    it('One filter', function(done) {
      chai
        .request(server)
        .get('/api/issues/test?assigned_to=Tommy')
        .end(function(err, res) {
          assert.equal(res.body[0]._id, id2);
          assert.equal(res.body[0].assigned_to, 'Tommy');
          done();
        });
    });

    it('Multiple filters (test for multiple fields you know will be in the db for a return)', function(done) {
      chai
        .request(server)
        .get(
          '/api/issues/test?assigned_to=Tommy&created_by=Tester&open=false&status_text=Boogie'
        )
        .end(function(err, res) {
          assert.equal(res.body[0]._id, id2);
          assert.equal(res.body[0].assigned_to, 'Tommy');
          assert.equal(res.body[0].created_by, 'Tester');
          assert.equal(res.body[0].open, false);
          assert.equal(res.body[0].status_text, 'Boogie');
          done();
        });
    });
  });

  describe('DELETE /api/issues/{project} => text', function() {
    it('No _id', function(done) {
      chai
        .request(server)
        .delete('/api/issues/test')
        .send({})
        .end(function(err, res) {
          assert.equal(res.text, '_id error');
          done();
        });
    });

    it('Valid _id', function(done) {
      const agent = chai.request(server).keepOpen();

      agent
        .delete('/api/issues/test')
        .send({ id: id1 })
        .end(function(err, res) {
          assert.equal(res.text, `deleted ${id1}`);

          agent
            .delete('/api/issues/test')
            .send({ id: id2 })
            .end(function(err, res) {
              assert.equal(res.text, `deleted ${id2}`);
              agent.close();
              done();
            });
        });
    });

    it('Invalid _id', function(done) {
      const id3 = 123456789;
      chai
        .request(server)
        .delete('/api/issues/test')
        .send({ id: id3 })
        .end(function(err, res) {
          assert.equal(res.text, `could not delete ${id3}`);
          done();
        });
    });
  });
});
