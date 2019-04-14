const express = require('express');
const router = express.Router();
const db = require('../db.js')

router.get('/getCategories', function(req, resp){
	db.query("SELECT * FROM Category", function (err, result, fields) {
    if (err) throw err;
    resp.send(result);
    console.log(result);
    });

})

module.exports = router; 

