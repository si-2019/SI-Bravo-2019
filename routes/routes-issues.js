const express = require('express');
const router = express.Router();
const db = require('../db.js');

router.get('/issues', (req, res) => {
    console.log("hito");
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    db.query("SELECT * FROM Issue", (err, result, fields) => {
        console.log(result);
        if (err) throw err;

        const response = {};
        response.new = result.filter((issue) => {
            return issue.issueStatus === 'new';
        });
        response.inProgress = result.filter((issue) => {
            return issue.issueStatus === 'inProgress';
        });
        response.resolved = result.filter((issue) => {
            return issue.issueStatus === 'resolved';
        })
        res.send(response); 
    });

})

module.exports = router;