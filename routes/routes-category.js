
module.exports = (app, db) => {
    
    app.get('/category/get', function(req, res) {
        
         db.issueCategory.findAll().then(rezultat => {
             res.send(rezultat);             
         }).catch(error => res.send("Greška prilikom čitanja iz baze!"));
    
    });

    app.post('/category/add',function(req, res){

        var imeKategorije = req.query.naziv; 
        const novaKategorija = db.issueCategory.build({
            
            naziv: imeKategorije
        }).save().then(x => res.send("Uspjesan upis!")).catch(error => { res.send(error)});     
    });

    app.get('/category/get/:categoryId', (req, res) => {
        const categoryID = req.params.categoryId;
        db.issueCategory.findOne({where: {id: categoryID}}).then((category) => {
            res.send((category));
        }).catch((err) => console.log(err));
    })
}
