
module.exports = (app, db) => {
    
    app.get('/frequentIssue/get', function(req, res) {
        
         db.frequentIssue.findAll().then(rezultat => {
             res.send(rezultat);             
         }).catch(error => res.send("Greška prilikom citanja iz baze!"));
    
    });

    app.post('/frequentIssue/add',function(req, res){

        var nazivIssuea = req.query.naziv; 
        var tekstIssuea = req.query.tekst;


        const noviFrequentIssue = db.frequentIssue.build({
            
            naziv: nazivIssuea,
            tekst: tekstIssuea
        }).save().then(x => res.send("Uspjesan upis!")).catch(error => { res.send(error)});     
    });
}
