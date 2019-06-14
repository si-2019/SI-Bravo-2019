const port = process.env.PORT || 31902;
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models/db.js');
const swaggerDoc = require('./swaggerDoc.js');
var cors = require("cors");

db.sequelize.sync().then(function(){
	console.log("Connection successful");
}).catch(function(err){
	console.log("Connection failed");
	console.log(err);
});

const app = express();

app.use(cors());

app.use(bodyParser.json());

require('./routes/routes-issues')(app, db);
require('./routes/routes-category')(app, db);
require('./routes/routes-frequentIssue')(app, db);
require('./routes/routes-messageInfo')(app, db);
require('./routes/routes-sendIssue')(app, db);
require('./routes/routes-draft')(app, db);
require('./routes/routes-archived')(app, db);
require('./routes/routes-reply')(app, db);
require('./routes/routes-user')(app, db);

swaggerDoc(app);


app.use("/*", (req, res, next)=> {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
	res.header("Access-Control-Allow-Headers",  "Origin, X-Requested-With");
	
	next();
});

//Server
app.listen(port, ()=> console.log(`Server started on port ${port}`));
module.exports = app;




