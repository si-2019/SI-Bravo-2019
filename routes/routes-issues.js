module.exports = (app, db) => {

/**
* @swagger
* //issues/:
*    get:
*      description: Vraca response sa new, in progress i resolved nizovima issue-a 
*/

    app.get('/issues/get', (req, res) => {
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");

        db.issue.findAll({
            include:[
                {
                    model: db.issueMessage,
                    as:'messages',
                    //through: {attributes: []},
                }] }).then((issues) => {
            const response = {};
            response.new = issues.filter((issue) => {
                return issue.status === 'new' || issue.status === 'New';
            });
            response.inProgress = issues.filter((issue) => {
                return issue.status === 'inProgress';
            });
            response.resolved = issues.filter((issue) => {
                return issue.status === 'resolved';
            })
            res.send(response);
        }).catch((err) => {
            throw err; // handle
        });
    })

    app.post('/issues/add',function(req, res){

        var status = req.query.status; 
        let procitaoStudnet = req.query.procitaoStudent;
        let procitalaSS = req.query.procitalaSS;
        let categoryID = req.query.categoryID;
        let studentID = req.query.studentID;

        const novaKategorija = db.issue.build({
            
            status: status,
            procitaoStudent: procitaoStudnet,
            procitalaSS: procitalaSS,
            categoryID: categoryID,
            StudentID: studentID
        }).save().then(x => res.send("Uspjesan upis!")).catch(error => { res.send(error)});     
    });

  


}

