module.exports = function(){
  var route = require('express').Router();
  var model = require('../model/chart_init')();
  console.log("get model......");

  route.get('/', function(req, res){
    console.log("route......");
    var r1 = require('../model/getjson')( function(output_){
       console.log("get json......");
       //res.send(model);
       //res.send("ddddddddd");
       
       var r2 = require('../model/plot')(output_, model, function(plot_){
         console.log("get plot......");
         res.render('layout',{plot:plot_});
       });
      
    });
  });

  return route
}
