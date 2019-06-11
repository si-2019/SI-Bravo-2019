module.exports = (app, db) => {

    app.post('/issue/reply/student',function(req, res){

        const novaKategorija = db.issueMessage.build({
            tekst: req.body.tekst,
            datum: new Date(),
            issueID: req.body.issueID,
            ocjenaPoruke:0,
            draftStatus: 0
        }).save().then(x => res.send(x)).catch(error => { res.send(error)});  
    });

    app.post('/issue/reply/SS',function(req, res){

        const novaKategorija = db.issueMessage.build({
            tekst: req.body.tekst,
            datum: new Date(),
            issueID: req.body.issueID,
            ocjenaPoruke:0,
            draftStatus: 0
        }).save().then(x => res.send(x)).catch(error => { res.send(error)});  
    });
}
