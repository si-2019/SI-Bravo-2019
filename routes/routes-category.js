
module.exports = (app, db) => {
    
    app.get('/category/get', function(req, res) {
        
         db.issueCategory.findAll().then(rezultat => {
             res.send(rezultat);             
         }).catch(error => res.send("Greška prilikom čitanja iz baze!"));
    
    });

    app.post('/category/add',function(req, res){
        var imeKategorije = req.body.naziv; 

        db.issueCategory.count({ where: { naziv: 'Indeksi'} }).then(count => {
            if (count != 0){
                console.log("postoji")
                res.send("Category already exists!")
            }
            else{
                const novaKategorija = db.issueCategory.build({
                    naziv: imeKategorije
                }).save().then(x => res.send("Successfully added category!")).catch(error => { res.send(error)});   
            }
        });
          
    });
}
