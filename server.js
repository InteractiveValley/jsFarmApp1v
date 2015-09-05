/**
* Created with jsFarmApp.
* User: richpolis
* Date: 2015-09-01
* Time: 08:11 PM
* To change this template use Tools | Templates.
*/
var express = require('express');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/seriestv',function(err,res){
	if(err) console.log('Error en la conexcion con la base de datos: ' + err);
	else console.log('Conexcion con la base de datos realizada');
});

app.configure(function(){
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
});

app.get('/',function(request, response){
  response.send('Hola Ricardo desde express');
});

require('./routes')(app);

app.listen(3000, function(){
  console.log('Server Express Ready!');
});