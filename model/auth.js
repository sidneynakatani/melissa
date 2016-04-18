
var mongoose = require('mongoose');
var authSchema = new mongoose.Schema({
    createdAt: Date,
    passKey: String
});

var Auth = mongoose.model('Auth', authSchema);


exports.add = function(){

   var auth = new Auth({
      createdAt: new Date(),
      passKey: 'abcb12hfdtrysooeoeo'
   });

   auth.save(function(err, auth){
      if(err){
         return console.error(err);
      }
      console.log('gravado');
   });

};

exports.findByHash = function(hash){
  console.log(hash);
  Auth.findOne({ passKey: hash }, function(err, auth) {
      if (err) {
	  return console.error(err);
      } 
  //console.dir(auth);
  console.log(auth.createdAt);
  console.log(auth.passKey);

});

};

