var chai = require("chai");
var chaiHttp = require("chai-http");
var app = require("../index");
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Categories", () => {
    describe("GET /", () => {
        // Test to get all categories record
        it("should get all categories record", (done) => {
             chai.request(app)
                .get('/category/get')
                .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('array');
                     done();
                });
         });
        
    });
});