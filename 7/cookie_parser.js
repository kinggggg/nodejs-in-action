var connect = require('connect');

var app = connect()
// .use(connect.cookieParser('abc')) //connect 3.6.6中没有cookieParser方法
    .use(function (req, res) {
        console.log(req.cookies);
        console.log(req.signedCookies);
        res.end('hello\n');
    })
          .listen(3000);
