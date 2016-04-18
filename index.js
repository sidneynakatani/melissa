var express = require('express');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://admin:zarman12@ds059205.mongolab.com:59205/ragdoll');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(' connected!');
});

var testeSchema = new mongoose.Schema({teste: String});
var Teste = mongoose.model('Teste',testeSchema);
var testando = new Teste({
  teste: 'teste'
});

testando.save(function(err, testando){
    if(err){
        return console.error(err);
    }
    console.log('gravado');
    
});

app.set('port', (process.env.PORT || 5000));


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


