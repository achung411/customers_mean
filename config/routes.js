var mongoose = require('mongoose'),
 Customer = mongoose.model('Customer');
module.exports = function Routes(app){
 app.get('/', function(req,res) { res.render('index', { title: 'hello' }); });
 app.post('/users/create', function(req,res) {
  var a = new User(req.body);
  a.save(function(err, a){
   console.log(err, a);
  });
 });
};