module.exports = (app, db) => {

    /**
    * @swagger
    * //draft/:
    *    get:
    *      description: Snima draft poruke u bazu, ispisuje sve draft poruke u DRAFTS dijelu
    */
    

        // OVU RUTU TREBA PREPRAVITI, NIJE JOŠ GOTOVA ---> !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        app.get('/issues/draft/get', (req, res) => {
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
                    return issue.status === 'new' && issue.draftStatus == true && issue.trashStudent == 0;
                });
                response.inProgress = issues.filter((issue) => {
                    return issue.status === 'inProgress' && issue.draftStatus == true && issue.trashStudent == 0;
                });
                response.resolved = issues.filter((issue) => {
                    return issue.status === 'resolved' && issue.draftStatus == true && issue.trashStudent == 0;
                })
                res.send(response);
            }).catch((err) => {
                throw err; // handle
            });
        })
    
        app.post('/issues/draft/add',function(req, res){
            
            if(req.body.issueTitle == '') 
            res.send("No title! Please choose title!")

            db.issueCategory.findOne({where:{naziv: req.body.issueTitle}}).then(function(category){ 
                db.issue.create({
                    status: 'new', 
                    procitaoStudent: req.body.procitaoStudent, 
                    procitalaSS: req.body.procitalaSS, 
                    categoryID: category.id, 
                    StudentID: 1, 
                    draftStatus: 1,
                    trashStudent:0,
                    trashSS: 0
                }).then(function(issue){

                        db.issueMessage.create({
                            tekst: req.body.issueText,
                            issueID: issue.id,
                            ocjenaPoruke: 1,
                            draftStatus: 1
                        }).then(function(j){
                                res.send("Successfully saved issue as draft!");
                            }).catch(error => { res.send(error)})
                }).catch(error => { res.send(error)})
          
            });

        })

        app.delete('/issues/draft/delete',function(req, res){

            db.issue.destroy({where: {id: req.query.id}}
                ).then(function(issue){
                    db.issueMessage.destroy({where: {issueID: null}}).then(res.sendStatus(200));
                })
            
        });

    
    
    }
    
    