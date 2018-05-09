var connect = require('connect');
var logger1 = require('./logger');


function hello(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello world');
}

var app = connect()

  .use(logger1(':httpVersion :url'))
  .use(hello)
  .listen(3000);
