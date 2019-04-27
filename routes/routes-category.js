const express = require('express');
const router = express.Router();
const db = require('../db.js')

router.get('/category/get', function(req, resp){
	db.query("SELECT * FROM Category", function (err, result, fields) {
    if (err) throw err;
    resp.send(result);
    });

})

// router.post('/category/add', function(req, res){
// 	var displayName = req.body.displayName; 
// 	console.log(displayName);
	
// 	db.query("INSERT INTO Category (CategoryType, KeyName, DispleyName) VALUES ('Ostalo', 'Ostalo', 'Ostalo');", function (err, result, fields) {
//     if (err) throw err;
//     res.send(result);
//     console.log(result);
//     });

// });  		

module.exports = router; 

