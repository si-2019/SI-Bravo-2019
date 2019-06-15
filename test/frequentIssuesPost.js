// Import the dependencies for testing
var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../index');
// Configure chai
chai.use(chaiHttp);
chai.should();

describe("kreiranje novog faq", () => {
    describe("POST /", () => {
        it ("treba vratiti objekat, 200,poruku Uspjesan upis!", (done) => {
            const faq = {
               
                naziv: "Unit test",
                tekst: "testiramo"
            }
            chai.request(app)
                .post('/frequentIssue/add')
                .send(faq)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    done()
                })
        })
    });
});