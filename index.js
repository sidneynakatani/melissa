var express = require('express');
var app = express();
var fs = require("fs");


app.set('port', (process.env.PORT || 5000));

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       res.end( data );
   });
})


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


