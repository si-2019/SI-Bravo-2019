
const Sequelize = require("sequelize");
const sequelize = new Sequelize("TYQcLL35gV","TYQcLL35gV","BLysSj9ZrP",{host:'37.59.55.185',dialect:"mysql",logging:false,  port: 3306,define: {
        timestamps: false
    }
});
const db = {}
db.Sequelize = Sequelize;  
db.sequelize = sequelize;

//import modela
db.issue = sequelize.import(__dirname+'/Issue.js');
db.issueCategory = sequelize.import(__dirname+'/IssueCategory.js');
db.frequentIssue = sequelize.import(__dirname+'/FrequentIssue.js');
db.issueMessage = sequelize.import(__dirname+'/IssueMessage.js');
db.korisnik = sequelize.import(__dirname+'/Korisnik.js');

module.exports=db;