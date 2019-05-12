
/* NASE */
const Sequelize = require("sequelize");
const sequelize = new Sequelize("TYQcLL35gV","TYQcLL35gV","BLysSj9ZrP",{host:"37.59.55.185",dialect:"mysql",logging:false});
const db={};

db.Sequelize = Sequelize;  
db.sequelize = sequelize;

//importujem modele
db.kategorija = sequelize.import(__dirname+'/modeli/kategorija.js');
db.issue = sequelize.import(__dirname+'/modeli/issue.js');
db.message = sequelize.import(__dirname+'/modeli/message.js');
db.frequentIssue = sequelize.import(__dirname+'/modeli/frequentIssue.js');


//moje relacije
//db.student.hasMany(db.issue, {as:'issueiStudent', foreignKey: 'issueID'});
db.kategorija.hasMany(db.issue, {as:'issueiKategorija', foreignKey: 'issueID'});
db.issue.hasMany(db.message, {as:'messagesIssue', foreignKey: 'messageID'});




module.exports=db;

