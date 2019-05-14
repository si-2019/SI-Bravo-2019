module.exports = (app, db) => {

    app.post('/issue/send',function(req, res){
        db.issueCategory.findOne({where:{naziv:req.query.issueTitle}}).then(kategorija => {
            //console.log(kategorija);
            const noviIssue = db.issue.build({
                status: "new",
                procitaoStudent: false,
                procitalaSS: false,
                issueID: kategorija.id,
                studentID: "2"
            }).save().then(x => {
                console.log("usao");
                console.log(x.id);
                console.log(new Date());
                const noviMessage = db.issueMessage.build({
                tekst: req.body.issueText,
                //datum: new Date(),
                messageID: x.id
            }).save().then(x => {res.send("Uspjesan upis!")});    
        }).catch(error => res.send(error))});
        });
    }

