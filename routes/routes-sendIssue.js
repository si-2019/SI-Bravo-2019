const express = require('express');
const router = express.Router();
const db = require('../db.js')

router.post('/issue/send', function(req, res){

    if(req.body.issueText.length == 0) res.send("Upišite sadržaj poruke");

    //Prvo pronaći id kategorije u tabeli Category
    db.query("SELECT id FROM Category WHERE DisplayName = '" + req.body.issueTitle + "';", function (err, result, fields){
        if(err) throw err;
        id = parseInt(result[result.length-1]['id']);
        id.toString();

        //Sada kad smo nasli id kategorije, trazimo id studenta
        //Međutim, pošto još uvijek nemamo login gotov, hardkodirat ćemo id studenta

        db.query("INSERT INTO Issue (idStudent, idCategory, issueStatus, message) VALUES (1, " + id + ", 'new', '" + req.body.issueText + "');", function (err, result, fields) {
            if (err) throw err;
            res.send("Uspjesno poslan issue!");
        });
    })

});  		

module.exports = router; 

