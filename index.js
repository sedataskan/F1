var express = require('express');
var app = express();//exp app oldu
var ejs = require('ejs');
var drivers = require('./modules/drivers.js');
var champions = require('./modules/champions.js');

app.engine('.ejs', ejs.__express);
app.set('views',__dirname+'/views'); //frontendini buradan çekti
app.use(express.static('views')); //exp kullan diyor özetle

app.get("/", async function(req,res) {
  let data = await drivers.getDrivers()
	res.render('./pages/index.ejs', {
    data : data
	});
});

app.get("/schedule", async function(req,res) {
  //let data = await module.getSchedule()
	res.render('./pages/schedule.ejs', {
   // data : data
	});
});

app.get("/champions", async function(req,res) {
  let data = await champions.getChampions()
	res.render('./pages/champions.ejs', {
  data : data
	});
});

app.listen(8000,function(){
  console.log("made by snt");
});