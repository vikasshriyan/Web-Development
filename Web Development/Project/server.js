var express = require('express');
var app = express(); //create an instance

var bodyParser = require('body-parser');
var multer = require('multer');

var mongoose = require('mongoose');

app.use(express.static(__dirname + '/public'));


var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ip);