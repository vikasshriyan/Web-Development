var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cs5610');

var express = require('express');
var app = express();

var DeveloperSchema = new mongoose.Schema({
    first: String,
    last: String,
    Specialization: String,
    City: String,
}, { collection: "Developer" });

var Developer = mongoose.model("Developer1", DeveloperSchema);

var developer1 = new Developer({ first: "Vikas", last: "Shriyan", Specialization: "Java", City: "Boston" });
var developer2 = new Developer({ first: "Shakti", last: "Patro", Specialization: "Python", City: "Miami" });
var developer3 = new Developer({ first: "Abhishek", last: "Patro", Specialization: "C++", City: "Boston" });






app.get('/api/Developer', function (req, res) {
    Developer.find(function (err, data) {
        res.json(data);
    });

});

app.get('/api/Developer/:id', function (req, res) {
    Developer.findById(req.params.id, function (err, data) {
        res.json(data);
        console.log(data);
    });
});

app.get('/api/Developer/last/:name', function (req, res) {
    var dev = {};
    Developer.find({ last: { "$in" : [req.params.name] }} ,function (err, data) {
        res.json(data);
    });
});

app.get('/api/Developer/city/:name', function (req, res) {
    var dev = {};
    Developer.find({ City: { "$in": [req.params.name] } }, function (err, data) {
        res.json(data);
    });
});

app.listen(3000);