const port = process.env.PORT || 31902;
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models/db.js');
const swaggerDoc = require('./swaggerDoc.js');

db.sequelize.sync().then(function(){
	console.log("Connection successful");
}).catch(function(err){
	console.log("Connection failed");
	console.log(err);
});

const app = express();

require('./routes/routes-issues')(app, db);
require('./routes/routes-category')(app, db);
require('./routes/routes-frequentIssue')(app, db);
require('./routes/routes-messageInfo')(app, db);

swaggerDoc(app);


app.use("/*", (req, res, next)=> {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header("Access-Control-Allow-Origin", "GET, PUT, POST, DELETE");
	res.header("Access-Control-Allow-Origin",  "Content-Type");
	
	next();
});

//Server
app.listen(port, ()=> console.log(`Server started on port ${port}`));
module.exports = app;




