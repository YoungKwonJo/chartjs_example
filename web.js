var express = require('express');
//var session = require('express-session');
//var MySQLStore = require('express-mysql-session')(session);
//var bodyParser = require('body-parser');

var app = express();
//app.use('/scripts/jquery.js', express.static(__dirname + '/node_modules/jquery/dist/jquery.min.js'));
app.use('/scripts/moment.js', express.static(__dirname + '/node_modules/moment/min/moment.min.js'));
app.use('/scripts/moment-timezone.js', express.static(__dirname + '/node_modules/moment-timezone/builds/moment-timezone-with-data.min.js'));

app.use('/scripts/chart.js', express.static(__dirname + '/node_modules/chart.js/dist/Chart.min.js'));

//app.use('/scripts/highcharts.js', express.static(__dirname + '/node_modules/highcharts/highcharts.js'));
//app.use('/scripts/jquery.dataTables.js', express.static(__dirname + '/node_modules/datatables/media/js/jquery.dataTables.min.js'));
//app.use('/css/jquery.dataTables.css', express.static(__dirname + '/node_modules/datatables/media/css/jquery.dataTables.min.css'));
//app.use('/images/', express.static(__dirname + '/node_modules/datatables/media/images/'));


app.use('/data/test.json', express.static(__dirname + '/data/test.json'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.locals.pretty = true;

var routes2 = require('./routes/index')();
app.use('/weather', routes2);

app.get('/', function(req, res){
  res.send('Hello home page');;
});

var aaa=new Date();

app.listen(8001, function(){
  console.log('Start, '+aaa);
})
