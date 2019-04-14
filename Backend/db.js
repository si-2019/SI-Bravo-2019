var mysql   = require('mysql')

var connection = mysql.createConnection({
	host: 'remotemysql.com',
	port:3306,
	user: 'TYQcLL35gV',
	password: 'BLysSj9ZrP',
	database: 'TYQcLL35gV'
})

connection.connect(function(error){
	if(error) {
		console.log('Error');
		throw error
	} else {
		console.log('Connected!');
	}
})

module.exports = connection;