module.exports = (app, db) => {

    app.post('/issue/send/s',function(req, res){
        db.issueCategory.findOne({where:{naziv:req.query.issueTitle}}).then(kategorija => {
            const noviIssue = db.issue.build({
                status: "new",
                procitaoStudent: false,
                procitalaSS: false,
                categoryID: kategorija.id,
                studentID: "1"
            }).save().then(x => {
                const noviMessage = db.issueMessage.build({
                tekst: req.query.issueText,
                datum: new Date(),
                issueID: x.id
            }).save().then(x => {res.send("Uspjesan upis!")});    
        }).catch(error => res.send(error))});
    });

    app.post('/issue/send/ss',function(req, res){
        db.issueCategory.findOne({where:{naziv:req.query.issueTitle}}).then(kategorija => {
            const noviIssue = db.issue.build({
                status: "new",
                procitaoStudent: false,
                procitalaSS: false,
                categoryID: kategorija.id,
                studentID: "1"
            }).save().then(x => {
                const noviMessage = db.issueMessage.build({
                tekst: req.query.issueText,
                datum: new Date(),
                issueID: x.id
            }).save().then(x => {res.send("Uspjesan upis!")});    
        }).catch(error => res.send(error))});
    });
}