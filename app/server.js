var express = require('express');

var app = express();

var obj = {
	num: 1323,
	str: 'hahah',
	obj: {
		url: "http://www.google.com.hk"
	}
}

app.get('/', function(req, res){
  res.json(obj);
});

module.exports = app;