const express = require('express');
const router = express.Router();
const con = require('../db.js');
const fs = require('fs');

function insertSQL(table, obj) {
    return `INSERT INTO ${table}(${Object.keys(obj).toString()}) VALUES (${Object.values(obj).toString()})`
}

router.post('/dodajNoviIssue', function(req, res){
	//console.log(req.body);
  var idStudenta = req.body['idStudenta'];
  var naslov = req.body['naslov'];
  var sadrzaj = req.body['sadrzaj'];

  if(idStudenta.length == 0)      //Zbog testiranja
    idStudenta = "1";
    
  con.query("SELECT idStudent FROM Issue WHERE idStudent="+'"'+idStudenta+'"', function(err, result, fields){
    if(result.length == 0)
      res.json({message: "Neuspjesno upisan Issue"});
    else{
      con.query("SELECT idIssue FROM Issue", function(err, result, fields){
      if(err) throw err;

      var id;

      if(result.length == 0)
          id = 1;
      else
          id = 1 + parseInt(result[result.length-1]['idIssue']);

      id = id.toString();

      var issueSadrzaj = {idIssue:id, Sadrzaj: sadrzaj};
      fs.appendFile('public/sadrzajIssue.csv',JSON.stringify(issueSadrzaj),function(err){
        if(err) throw err;
      });

      var datum = new Date().toISOString().slice(0, 19).replace('T', ' ');

      let sql = insertSQL('Issue', {
          "idIssue":'"' + id + '"',
          "idStudent":'"' + idStudenta + '"',
          "idIssueType":'"' + id + '"',
          "idIssueCategory":'"' + id + '"',
          "title": '"' + naslov + '"',
          "message": '"' + id + '"',
          "DateCreated": '"' + datum + '"', 
          "DateModified": '"' + datum + '"'
        });
        //console.log(sql);
        
        con.query(sql, (err, result) => {
          console.log("ERRRORRRR: "+err);
            console.log(result);
            if(err)
              res.json({message: "Neuspjesno upisan Issue"});
            else
              res.json({message: "Uspjesno upisan Issue"});
        });
  });
    }
  });
});

module.exports = router; 