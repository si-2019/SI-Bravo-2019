var chai = require("chai");
var chaiHttp = require("chai-http");
var app = require("../index");
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Drafts issues get", () => {
    describe("GET /", () => {
        // Test to get all drafts issues record
        it("should get all drafts record", (done) => {
             chai.request(app)
                .get('/issues/draft/get')
                .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('array');
                     done();
                });
         });
        
    });
});