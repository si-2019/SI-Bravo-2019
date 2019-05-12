module.exports = (app, db) => {
    app.get('/issues', (req, res) => {
        db.issue.findAll().then((issues) => {
            const response = {};
            response.new = issues.filter((issue) => {
                return issue.issueStatus === 'new';
            });
            response.inProgress = issues.filter((issue) => {
                return issue.issueStatus === 'inProgress';
            });
            response.resolved = issues.filter((issue) => {
                return issue.issueStatus === 'resolved';
            })
            res.send(response);
        }).catch((err) => {
            throw err; // handle
        });
    })
}