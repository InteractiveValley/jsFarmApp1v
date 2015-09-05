/**
* Created with jsFarmApp.
* User: richpolis
* Date: 2015-09-02
* Time: 07:19 PM
* To change this template use Tools | Templates.
*/
/* Ejemplo de como crear un servidor con expressjs */
var express = require('express');
var app = express();

app.get('/',function(request, response){
  response.send('hello express');
});

app.listen(3000, function(){
  console.log('Server Express Ready!');
});