/**
* Created with jsFarmApp.
* User: richpolis
* Date: 2015-09-02
* Time: 07:48 PM
* To change this template use Tools | Templates.
*/
module.exports = function(app){
	var SerieTV = require('./seriestv');
	
	//GET all
	findAllSeriesTV = function(req, res){
		SerieTV.find(function(err,seriestv){
			if(!err) res.send(seriestv);
			else console.log("Error: " + err);
		});
	};
	
	//GET one
	findByID = function(req, res){
		SerieTV.findById(req.param.id, function(err, serietv){
			if(!err) res.send(serietv);
			else console.log("Error: " + err);
		});
	};
	
	// POST
	addSerieTV = function(req, res){
		console.log("POST");
		console.log(req.body);
		var serietv = new SerieTV({
			titulo: req.body.titulo,
			temporadas: req.body.temporadas,
			pais: req.body.pais,
			genero: req.body.genero
		});
		serietv.save(function(err){
			if(!err) console.log("SerieTV Guardada");
			else console.log("Error: " + err);
		});
		res.send(serietv);
	};
	
	// PUT
	updateSerieTV = function(req, res){
		SerieTV.findById(req.param.id,function(err,serietv){
			serietv.titulo = req.body.titulo;
			serietv.temporadas = req.body.temporadas;
			serietv.pais = req.body.pais;
			serietv.genero = req.body.genero;
			
			serietv.save(function(err){
				if(!err) console.log("SerieTV Actualizada");
				else console.log("Error: " + err);
				
				res.send(serietv);
			});
		});
		
		
	};
	
	deleteSerieTV = function(req, res){
		SerieTV.findById(req.param.id,function(err,serietv){
			serietv.remove(function(err){
				if(!err) console.log("SerieTV eliminada");
				else console.log("Error: " + err);
			});
		});
	};
	
	// API Routes
	app.get('/seriestv',findAllSeriesTV);
	app.get('/seriestv/:id',findByID);
	app.post('/seriestv',addSerieTV);
	app.put('/seriestv/:id',updateSerieTV);
	app.delete('/seriestv/:id',deleteSerieTV);
	
};	