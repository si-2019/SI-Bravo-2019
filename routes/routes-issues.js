module.exports = (app, db) => {

/**
* @swagger
* //issues/:
*    get:
*      description: Vraca response sa new, in progress i resolved nizovima issue-a 
*/

    app.get('/issues', (req, res) => {
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
                return issue.status === 'new';
            });
            response.inProgress = issues.filter((issue) => {
                return issue.status === 'inProgress';
            });
            response.resolved = issues.filter((issue) => {
                return issue.status === 'resolved';
            })
            res.send(response);
        }).catch((err) => {
            throw err; // handle
        });
    })
}
