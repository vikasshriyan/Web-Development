var express = require('express');
var app = express(); //create an instance

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


developer1.save();
developer2.save();
developer3.save();




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

var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ip);