const Authenticate = require('../services/auth.service')
const ROLES = Authenticate.ROLES

module.exports = (app, db) => {

/**
* @swagger
* //issues/:
*    get:
*      description: Vraca response sa new, in progress i resolved nizovima issue-a 
*/

    app.get('/issues/get', Authenticate.authenticate([ROLES.STUDENT, ROLES.STUDENTSKA_SLUZBA]), (req, res) => {
        // res.header("Access-Control-Allow-Origin", "http://localhost:3000");

        db.issue.findAll({
            include:[
                {
                    model: db.issueMessage,
                    as:'messages',
                    //through: {attributes: []},
                }] }).then((issues) => {
            const response = {};
            response.new = issues.filter((issue) => {
                return issue.status === 'new' && issue.draftStatus == false && issue.trashStudent == 0 || issue.status === 'New' && issue.draftStatus == false && issue.trashStudent == 0;
            });
            response.inProgress = issues.filter((issue) => {
                return issue.status === 'inProgress' && issue.draftStatus == false && issue.trashStudent == 0;
            });
            response.resolved = issues.filter((issue) => {
                return issue.status === 'resolved' && issue.draftStatus == false && issue.trashStudent == 0;
            })

            

            res.send(response);

        }).catch((err) => {
            throw err; // handle
        });
    })
 
    
    app.post('/issues/add',Authenticate.authenticate([ROLES.STUDENT, ROLES.STUDENTSKA_SLUZBA]), function(req, res){

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
            StudentID: studentID,
            datum: new Date(),
            draftStatus: 0,
            trashStudent: 0,
            trashSS: 0,
            datum: new Date()
        }).save().then(x => res.send("Uspjesan upis!")).catch(error => { res.send(error)});     
    });
    app.put('/issues/reslove',Authenticate.authenticate([ROLES.STUDENT, ROLES.STUDENTSKA_SLUZBA]), function(req, res, next){

        
        let id = req.body.idIssue;

        db.issue.update(
            {status:'resolved'},
            {where: {id: id} }
           
        ).then(result => {
            res.send("Successfully");
        });
        
    });

    
    
  


}

