var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../server');
// Configure chai
chai.use(chaiHttp);
chai.should();

describe("kreiranje", () => {
    describe("POST /dodajNoviIssue", () => {
        it ("ocekivana poruka : Uspjesno upisan Issue", (done) => {
            const Issue = {
                idStudenta: "1",                                      
                naslov: "Problem1",
                sadrzaj: "Prvi test dodavanja Issue",
                fajl: "kasnije ce se implementirati"
            }
            chai.request(app)
                .post('/dodajNoviIssue')
                .send(Issue)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('message')
                    res.body.should.have.property('message').eql('Uspjesno upisan Issue')
                    done()
                })
        })
    });
});

describe("kreiranje", () => {
    describe("POST /dodajNoviIssue", () => {
        it ("ocekivana poruka : Neuspjesno upisan Issue", (done) => {
            const Issue = {
                idStudenta: "500",                                      
                naslov: "Problem1",
                sadrzaj: "Prvi test dodavanja Issue",
                fajl: "kasnije ce se implementirati"
            }
            chai.request(app)
                .post('/dodajNoviIssue')
                .send(Issue)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('message')
                    res.body.should.have.property('message').eql('Neuspjesno upisan Issue')
                    done()
                })
        })
    });
});