var http = require('http');
var connect = require('connect');
var logger = require('morgan');

var app = connect()
// .use(connect.logger()) //connect更新了 logger更换成了morgan。不能这么用，应该为下面一行
          .use(logger('dev'))
          .listen(3000);
