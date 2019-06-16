const Authenticate = require('../services/auth.service')
const ROLES = Authenticate.ROLES

module.exports = (app, db) => {

    app.get('/message/get',Authenticate.authenticate([ROLES.STUDENT, ROLES.STUDENTSKA_SLUZBA]),  (req, res) => {
        
        let issueID = req.query.issueID;

        db.issueMessage.findAll().then((messages) => {

            const response = {};
            response.svePoruke = messages.filter((message) => {
                return message.issueID == issueID;
            });
            
            res.send(response);
        }).catch((err) => {
            res.send("Greska prilikom rada sa bazom!");
        });
    });

    app.post('/message/add',Authenticate.authenticate([ROLES.STUDENT, ROLES.STUDENTSKA_SLUZBA]),  (req,res) => {

        let issueID = req.query.issueID;
        let messageTekst = req.query.tekst;
        let ocjenaPoruke = req.query.ocjenaPoruke;
        
        console.log(issueID);

        const novaPoruka = db.issueMessage.build({
            
            issueID: issueID,
            tekst: messageTekst,
            ocjenaPoruke: ocjenaPoruke
        }).save().then(x => res.send("Uspjesan upis!")).catch(error => { res.send(error)});
    }); 
}