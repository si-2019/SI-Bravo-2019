// Import the dependencies for testing
var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../index');
// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Kreiranje novog faq", () => {
    describe("POST /", () => {
        it ("Nakon upisa vraća objekat,poruku 'Uspjesan upis!',200", (done) => {
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