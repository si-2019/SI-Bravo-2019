module.exports = (app, db) => {

    /**
    * @swagger
    * //draft/:
    *    get:
    *      description: Kada se poruka u Track Issues dijelu arhivira, ona prelazi u folder Archived
    */
    
        // OVU RUTU TREBA PREPRAVITI, NIJE JOŠ GOTOVA ---> !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        app.get('/issues/archived/get', (req, res) => {
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
                    return issue.status === 'new' && issue.draftStatus == false && issue.trashStudent == 1;
                });
                response.inProgress = issues.filter((issue) => {
                    return issue.status === 'inProgress' && issue.draftStatus == false && issue.trashStudent == 1;
                });
                response.resolved = issues.filter((issue) => {
                    return issue.status === 'resolved' && issue.draftStatus == false && issue.trashStudent == 1;
                })

                res.send(response);

            }).catch((err) => {
                throw err; // handle
            });
        })


        app.put('/issues/archived/add',function(req, res, next){

            let trashStudent = req.body.trashStudent;
            let trashSS = req.body.trashSS;
            let id = req.body.idIssue;
    
            db.issue.update(
                {trashStudent: trashStudent, trashSS: trashSS},
                {where: {id: id} }
               
            ).then(result => {
                res.send("Successfully");
            });
            
        });

        app.put('/issues/archived/delete', function(req, res){
            db.issue.update(
                {trashStudent: req.body.trashStudent, trashSS: req.body.trashSS},
                {where: {id: req.body.id}}
            ).then((result)=>{
                res.send("Empty!")
            });
        });
    }
    
    