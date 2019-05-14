module.exports = (app, db) => {

/**
* @swagger
* //issues/:
*    get:
*      description: Vraca response sa new, in progress i resolved nizovima issue-a 
*/

app.get('/issues',function(req, res){
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");

    db.issue.findAll({where:{status:"new"}}).then(newIssues => {
        db.issue.findAll({where:{status:"inProgress"}}).then(inProgressIssues => {
            db.issue.findAll({where:{status:"resolved"}}).then(resolvedIssues => {
                res.send({newIssues, inProgressIssues, resolvedIssues});
            });
        });
    });
});
}