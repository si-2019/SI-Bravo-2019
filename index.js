const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 31902;


//modeli se kreiraju pri pokretanju aplikacije
const db = require('./db.js')
db.sequelize.sync({force:false}).then(function(){ 
});

require('./routes/routes-issues')(app, db);

app.get('/category/get', function(req, res) {
	// let result = [];
	 db.kategorija.findAll().then(project => {
		 console.log(project);
		 res.send(project);
		 
	 });

});


app.post('/dodajNovuKategoriju',function(req, res){
	var imeKategorije = req.query.naziv; 
	
	const novaKategorija = db.kategorija.build({
		naziv: "Nihad"
	}).save();

	
});


app.use("/*", (req, res, next)=> {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header("Access-Control-Allow-Origin", "GET, PUT, POST, DELETE");
	res.header("Access-Control-Allow-Origin",  "Content-Type");
	
	next();
});

//Server
app.listen(port, ()=> console.log(`Server started on port ${port}`));
module.exports = app;




