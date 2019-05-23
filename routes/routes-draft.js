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
                    }] 
            }).then((issues) => {
                const response = {};
                response.drafts = issues.filter((issue) => {
                    return issue.draftStatus == '1';
                });
                
                res.send(response);

            }).catch((err) => {
                throw err; // handle
            });
        })

    
        app.post('/issues/draft/add',function(req, res){

            db.issueCategory.findOne({where:{naziv: req.body.issueTitle}}).then(function(category){ 

                db.issue.create({
                    status: 'new', 
                    procitaoStudent: req.body.procitaoStudent, 
                    procitalaSS: req.body.procitalaSS, 
                    categoryID: category.id, 
                    StudentID: 1, 
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
    }
    
    