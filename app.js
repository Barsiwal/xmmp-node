var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.post("/", function (req, res) {
    var username;
    var password;
    username = req.body.username;
    password = req.body.password;
    return res.send({
        var request = require('request'),
            username = "admin@karan-barsiwal-linux",
            password = "admin",
            url = "http://localhost:5280/admin/server/karan-barsiwal-linux/users/",
            auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

        request({
                url: url,
                headers: {
                    "Authorization": auth
                }
            },
            function (error, response, body) {
                // Do more stuff with 'body' here
            }
        );
    });
});
var port = process.env.PORT || '3000';
app.listen(port, function () {
    console.log('listening on port ' + process.env.PORT);
});
