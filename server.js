var path = require('path')
var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(express.static("public"));

var mysql      = require('mysql');
var connection = mysql.createConnection(
	// process.env.JAWSDB_URL ||
{
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'patientInfo_db'
});
 
connection.connect();
 
app.get('/appointments', function(req, res){
	connection.query('SELECT * FROM appointments', function (error, results, fields) {
	  if (error) res.send(error)
	  else res.json(results);
	});
});

app.post('/insert', function(req, res){

	if (req.body.pat_name.length > 1){
		connection.query('INSERT INTO appointments (pat_name) VALUES (?)', [req.body.pres_name], function (error, results, fields) {
		  if (error) res.send(error)
		  else res.redirect('/');
		});
	}else{
		res.send('invalid name')
	}
});

app.get('/delete', function(req, res){

	if (req.query.id){
		connection.query('DELETE FROM appointments WHERE id = ?', [req.query.id], function (error, results, fields) {
		  if (error) res.send(error)
		  else res.redirect('/');
		});
	}else{
		res.send('you need an id')
	}
});

app.get('/update', function(req, res){

	if (req.query.id && req.query.pat_name.length > 1){
		connection.query('UPDATE appointments SET pat_name = ? WHERE id = ?', [req.query.pat_name, req.query.id], function (error, results, fields) {
		  if (error) res.send(error)
		  else res.redirect('/');
		});
	}else{
		res.send('you need an id')
	}
});

app.get('/charts', function(req, res){
	connection.query('SELECT * FROM charts', function (error, results, fields) {
	  if (error) res.send(error)
	  else res.json(results);
	});
});

app.post('/insert', function(req, res){

	if (req.body.pat_name.length > 1){
		connection.query('INSERT INTO charts (pat_name) VALUES (?)', [req.body.pres_name], function (error, results, fields) {
		  if (error) res.send(error)
		  else res.redirect('/');
		});
	}else{
		res.send('invalid name')
	}
});

app.get('/delete', function(req, res){

	if (req.query.id){
		connection.query('DELETE FROM charts WHERE id = ?', [req.query.id], function (error, results, fields) {
		  if (error) res.send(error)
		  else res.redirect('/');
		});
	}else{
		res.send('you need an id')
	}
});

app.get('/update', function(req, res){

	if (req.query.id && req.query.pat_name.length > 1){
		connection.query('UPDATE charts SET pat_name = ? WHERE id = ?', [req.query.pat_name, req.query.id], function (error, results, fields) {
		  if (error) res.send(error)
		  else res.redirect('/');
		});
	}else{
		res.send('you need an id')
	}
});

app.get('/payments', function(req, res){
	connection.query('SELECT * FROM payments', function (error, results, fields) {
	  if (error) res.send(error)
	  else res.json(results);
	});
});

app.post('/insertpayments', function(req, res){

console.log(req.body)

	connection.query('INSERT INTO payments (amount) VALUES (?)', [req.body.PayAmount], function (error, results){
		if (error) res.send(error)
		// else res.redirect('/');
	} )
	// if (req.body.pat_name.length > 1){
	// 	connection.query('INSERT INTO payments (pat_name) VALUES (?)', [req.body.pres_name], function (error, results, fields) {
	// 	  if (error) res.send(error)
	// 	  else res.redirect('/');
	// 	});
	// }else{
	// 	res.send('invalid name')
	// }
});

app.get('/deletepayments', function(req, res){

	if (req.query.id){
		connection.query('DELETE FROM payments WHERE id = ?', [req.query.id], function (error, results, fields) {
		  if (error) res.send(error)
		  else res.redirect('/');
		});
	}else{
		res.send('you need an id')
	}
});

app.get('/updatepayments', function(req, res){

	if (req.query.id && req.query.pat_name.length > 1){
		connection.query('UPDATE payments SET pat_name = ? WHERE id = ?', [req.query.pat_name, req.query.id], function (error, results, fields) {
		  if (error) res.send(error)
		  else res.redirect('/');
		});
	}else{
		res.send('you need an id')
	}
});


app.listen(3000, function(){
	console.log('listening on 3000');
});









