
module.exports = (app, db) => {
    
    app.get('/category/get', function(req, res) {
        
         db.issueCategory.findAll().then(rezultat => {
             res.send(rezultat);             
         }).catch(error => res.send("Greška prilikom čitanja iz baze!"));
    
    });

    app.post('/category/add',function(req, res){

        var imeKategorije = req.query.naziv; 
        console.log(imeKategorije);
        const novaKategorija = db.issueCategory.build({
            
            naziv: imeKategorije
        }).save().then(x => res.send("Uspjesan upis!")).catch(error => { res.send(error)});     
    });
}
