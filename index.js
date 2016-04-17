var express = require('express');
var app = express();
var fs = require('fs');
var nosql = require('nosql').load(__dirname +'/database.nosql');

//nosql.insert({ name: 'Peter' });
var x = nosql.views.all('young', function(err, documents, count) {
	// view file not created 
	// documents === empty 
}, 0, 10);

console.log(x);

app.set('port', (process.env.PORT || 5000));

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       res.end( data );
   });
})

app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       res.end( JSON.stringify(user));
   });
})


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


