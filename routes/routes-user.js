module.exports = (app, db) => {
    app.get('/korisnici/get', function(req, res) {
        db.korisnik.findAll({where:{idUloga:1}}).then(rezultat => {
            res.send(rezultat);             
        }).catch(error => res.send("Greška prilikom čitanja iz baze!"));
    });
}