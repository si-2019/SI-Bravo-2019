var chai = require("chai");
var chaiHttp = require("chai-http");
var app = require("../index");
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Archived issues get", () => {
    describe("GET /", () => {
        // Test to get all archived issues record
        it("should get all categories record", (done) => {
             chai.request(app)
                .get('/issues/archived/get')
                .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('array');
                     done();
                });
         });
        
    });
});