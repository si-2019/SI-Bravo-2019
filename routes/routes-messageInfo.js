module.exports = (app, db) => {

    app.get('/message/get', (req, res) => {
        
        let issueID = req.query.issueID;

        db.issueMessage.findAll().then((messages) => {

            const response = {};
            response.svePoruke = messages.filter((message) => {
                return message.issueID === issueID;
            });
            
            res.send(response);
        }).catch((err) => {
            res.send("Greska prilikom rada sa bazom!");
        });
    });

  /*  app.post('/message/add', (req,res) => {

        let issueID = req.query.issueID;
        let messageTekst = req.query.tekst;
        
        console.log(issueID);

        const novaPoruka = db.issueMessage.build({
            
            messageID: issueID,
            tekst: messageTekst
        }).save().then(x => res.send("Uspjesan upis!")).catch(error => { res.send(error)});
    }); */
}