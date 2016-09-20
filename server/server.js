var express = require('express');
var app = express();

var port = process.env.PORT || 8787;

app.use(express.static('./public'));

app.use('/api/echo', require('./api/echo'));

//render server side

app.use('/', require('./render/render'));

app.listen(port);

console.log('App started goto - http://0.0.0.0:' + port);