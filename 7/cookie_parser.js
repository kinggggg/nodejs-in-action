var connect = require('connect');

var app = connect()
// .use(connect.cookieParser('abc')) //connect 3.6.6中没有cookieParser方法
    .use(function (req, res) {
        console.log(req.cookies);
        console.log(req.signedCookies);

        //手动设置响应cookie
        res.setHeader('Set-Cookie', 'foo=bar');
        res.setHeader('Set-Cookie', 'zeek=lee;Expires=Tue, 08 Jun 2021 10:10:10 GMT');//后设置的cookie覆盖了前面的

        res.end('hello\n');
    })
          .listen(3000);
