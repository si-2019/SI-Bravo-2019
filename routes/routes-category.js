const Authenticate = require('../services/auth.service')
const ROLES = Authenticate.ROLES

module.exports = (app, db) => {
    
    app.get('/category/get',Authenticate.authenticate([ROLES.STUDENT, ROLES.STUDENTSKA_SLUZBA]), function(req, res) {
        
        db.issueCategory.findAll().then(rezultat => {
            res.send(rezultat);             
        }).catch(error => res.send("Greška prilikom čitanja iz baze!"));
    
    });

    app.post('/category/add', Authenticate.authenticate([ROLES.STUDENT, ROLES.STUDENTSKA_SLUZBA]), function(req, res){
        var imeKategorije = req.body.naziv; 
        console.log(imeKategorije)

        db.issueCategory.count({ where: { naziv: imeKategorije} }).then(count => {
            if (count != 0){
                res.send("Category already exists!")
            }
            else{
                const novaKategorija = db.issueCategory.build({
                    naziv: imeKategorije
                }).save().then(x => res.send("Successfully added category!")).catch(error => { res.send(error)});   
            }
        });
          
    });

    app.get('/category/get/:categoryId', Authenticate.authenticate([ROLES.STUDENT, ROLES.STUDENTSKA_SLUZBA]), (req, res) => {
        const categoryID = req.params.categoryId;
        db.issueCategory.findOne({where: {id: categoryID}}).then((category) => {
            res.send((category));
        }).catch((err) => console.log(err));
    })
}
