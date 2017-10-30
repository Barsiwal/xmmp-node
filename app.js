var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const request = require('request');
var app = express();

var http = require('http');


var httpServer = http.createServer(app);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.post("/", function (req, res) {
    var username;
    var password;
    username = req.body.username;
    password = req.body.password;
    var a;
    console.log(username);
    console.log(password);
    const options = {
        url: 'http://localhost:5280/admin/server/karan-barsiwal-linux/users/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Host': 'localhost:5280'
        },
        auth: {
            user: 'admin@karan-barsiwal-linux',
            password: 'admin'
        },
        form: {
            'newusername': username,
            'newuserpassword': password,
            'addnewuser': 'Add+User'
        }
    };

    request(options, function (err, res, body) {
        console.log(body);
        console.log(res);
        console.log(err);
    });
    return res.send({
        status: 'ok'
    });
});



//function PostCode() {
//    // Build the post string from an objectbject of options to indicate where to post to
//    var post_options = {
//        host: 'localhost:5280',
//        port: '80',
//        path: '/compile',
//        method: 'POST',
//        headers: {
//            'Content-Type': 'application/x-www-form-urlencoded',
//            'Host': 'localhost:5280',
//            'Authorization': auth
//        },
//        body:{
//            'newusername':username,
//            'newuserpassword':password,
//            'addnewuser':'Add+User'
//    }
//    };
//
//    // Set up the request
//    var post_req = http.request(post_options, function (res) {
//        res.setEncoding('utf8');
//        res.on('data', function (chunk) {
//            console.log('Response: ' + chunk);
//        });
//    });
//    post_req.write(post_data);
//    post_req.end();
//
//}



httpServer.listen(3000);
