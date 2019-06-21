var supertest = require('supertest')
var should = require('should')

var server = supertest.agent('http://localhost:3000')

describe('SAMPLE unit test', () => {

    it('should return home page', done => {

        server
            .get('/')
            .expect('Content-Type', /text/)
            .expect(200)
            .end((err, res) => {

                res.status.should.equal(200)
                done()
            })
    })
})