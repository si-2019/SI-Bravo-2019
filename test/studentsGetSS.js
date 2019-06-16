var chai = require("chai");
var chaiHttp = require("chai-http");
var app = require("../index");
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Students", () => {
    describe("GET /", () => {
        // Test to get all students record
        it("should get all students record", (done) => {
             chai.request(app)
                .get('/korisnici/get')
                .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('array');
                     done();
                });
         });
        
    });
});