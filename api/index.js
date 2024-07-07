var express = require('express');
var path = require('path');
var bcrypt = require('bcrypt');
var app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.get('/', function (req, res) {
    res.render("login");
});
app.get('/signup', function (req, res) {
    res.render("signup");
});
var port = 5000;
app.listen(port, function () {
    console.log("Server running on port: ".concat(port));
});
