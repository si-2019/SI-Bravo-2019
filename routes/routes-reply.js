const Authenticate = require('../services/auth.service')
const ROLES = Authenticate.ROLES

module.exports = (app, db) => {

    app.post('/issue/reply/student',Authenticate.authenticate([ROLES.STUDENT, ROLES.STUDENTSKA_SLUZBA]), function(req, res){

        const newMessage = db.issueMessage.build({
            tekst: req.body.issueText,
            datum: new Date(),
            issueID: req.body.issueID,
            ocjenaPoruke:0,
            draftStatus: 0
        })
        .save()
        .then(
            db.issue.update(
                {datum: new Date()},
                {where: {id: req.body.issueID}}
            ).then((result)=>{
                res.send("Uspjesan upis!")
            })
        );   
    });

    app.post('/issue/reply/SS',Authenticate.authenticate([ROLES.STUDENT, ROLES.STUDENTSKA_SLUZBA]), function(req, res){

        const newMessage = db.issueMessage.build({
            tekst: req.body.tekst,
            datum: new Date(),
            issueID: req.body.issueID,
            ocjenaPoruke:0,
            draftStatus: 0
        }).save().then(x => {res.send("Uspjesan upis!")});   
    });
}
