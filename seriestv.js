/**
* Created with jsFarmApp.
* User: richpolis
* Date: 2015-09-02
* Time: 07:21 PM
* To change this template use Tools | Templates.
*/
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var seriestv = new Schema({
	titulo: { type: String},
	temporadas: { type: Number},
	pais: { type: String},
	genero: {
		type: String,
		enum: ['Comedia','Fantasia','Drama','Terror','Sci-Fi','Suspenso','Anime']
	}
});

module.exports = mongoose.model('SeriesTV',seriestv);