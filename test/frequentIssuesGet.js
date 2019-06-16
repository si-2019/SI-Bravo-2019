// Import the dependencies for testing
var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../index');
// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Vraca niz svih ucestalih upita! ", () => {
    describe("GET /faq", () => {
        it ("Vraca niz svih FAQ", (done) => {
            chai.request(app)
                .get('/frequentIssue/get')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
               });
        })
      
        
    });
});