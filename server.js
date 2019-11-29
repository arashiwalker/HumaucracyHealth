var path = require('path')
var express = require('express');
var app = express();

app.use(express.urlencoded())

app.use(express.static("public"));

var mysql = require('mysql');
var connection = mysql.createConnection(
	process.env.JAWSDB_URL ||
{
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'patientInfo_db'
});
 
connection.connect();

app.post('/signup', function(req, res){
	console.log(req.body)

	connection.query('INSERT INTO users (full_name, user_name, email_e, pass_d) VALUES (?, ?, ?, ?)',
		[req.body.full_name, req.body.user_name, req.body.email_e, req.body.pass_d],
		function(error, results){
			if (error) return res.send(error)
			res.sendFile(path.join(__dirname,"protected/charts.html"))
		}
	)
})

app.post('/login', function(req, res){
	console.log(req.body)

	connection.query('SELECT * FROM users WHERE user_name=? and pass_d=?',
		[req.body.user_name, req.body.pass_d],
		function(error, results){
			if (error) return res.send(error)

			if (results.length == 1) {

				res.sendFile(path.join(__dirname,"protected/charts.html"))
			} else {
				
				res.redirect('/login.html')
			}
		}
	)
})

var port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log("listening on 3000");
});