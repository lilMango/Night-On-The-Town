var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'public'));

app.get('/', function (req, res) {
	res.sendfile('public/index.html');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var port = process.env.PORT || 1337; 
app.set('port', port);

var server = app.listen(port, function() {
  var tmp = 'listening on http://localhost:'+port;
  console.log(tmp);
});

module.exports = app;
