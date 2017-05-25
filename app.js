// load the things we need
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();
var sha1 = require('sha1');
app.use(express.static(__dirname + '/public'));
// set the view engine to ejs
app.set('view engine', 'ejs');
//app.set("views","./view");

/*
*
*Initializing session parameter
*
*/
app.use(session({secret: 'falppyBirdaCarionEater', saveUninitialized: true,
                 resave: true}));
/*
*
*bodyParser helps us retrieve parameters
*
*/
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function(req, res) {
  res.render('main/ind');
  res.end();
});
app.use(function(req, res, next){
  // the status option, or res.statusCode = 404
  // are equivalent, however with the option we
  // get the "status" local available as well
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //app.next();
});
app.use(function(req, res, next){
  // the status option, or res.statusCode = 404
  // are equivalent, however with the option we
  // get the "status" local available as well
  res.render('main/error', { status: 404, url: req.url });
});
                                                                                                                              

app.listen(8000);
console.log('3000 is the magic port');