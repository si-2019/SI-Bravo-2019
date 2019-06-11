module.exports = (app, db) => {

    app.post('/issue/reply/student',function(req, res){

        const newMessage = db.issueMessage.build({
            tekst: req.body.issueText,
            datum: new Date(),
            issueID: req.body.issueID,
            ocjenaPoruke:0,
            draftStatus: 0
        }).save().then(x => {res.send("Uspjesan upis!")});   
    });

    app.post('/issue/reply/SS',function(req, res){

        const newMessage = db.issueMessage.build({
            tekst: req.body.tekst,
            datum: new Date(),
            issueID: req.body.issueID,
            ocjenaPoruke:0,
            draftStatus: 0
        }).save().then(x => {res.send("Uspjesan upis!")});   
    });
}
