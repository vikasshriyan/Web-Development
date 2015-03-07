var express = require('express');
var app = express(); //create an instance

var bodyParser = require('body-parser');
var multer = require('multer');

var mongoose = require('mongoose');


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data

app.use(express.static(__dirname + '/public'));

//------------------------MongoDB Code---------------------------------------//

var connectionString = process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/cs5610';
mongoose.connect(connectionString);
var DeveloperSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    specialization: String,
    city: String,
}, { collection: 'developer' });

var DeveloperModel = mongoose.model('DeveloperModel', DeveloperSchema);


app.post("/developer", function (req, res) {
    var developer1 = new DeveloperModel(req.body);
    developer1.save(function (err, doc) {
    DeveloperModel.find(function (err, data) {
    res.json(data);
        });
    });
      
});

app.get("/developer", function (req, res) { // get function to get a response from the server<br />
    DeveloperModel.find(function (err, data) {
    res.json(data);
    });
});

app.delete("/developer/:id", function (req, res) {
    DeveloperModel.findById(req.params.id, function (err, doc) {
        doc.remove();
        DeveloperModel.find(function (err, data) {
        res.json(data);
        });
    });
});

//-------------- To get developer based on the Object ID----------//
app.get('/Developer/:id', function (req, res) {
    DeveloperModel.findById(req.params.id, function (err, data) {
        res.json(data);
        console.log(data);
    });
});

app.get('/Developer/last/:name', function (req, res) {
    DeveloperModel.find({ lastName: { "$in": [req.params.name] } }, function (err, data) {
        res.json(data);
    });
});

app.get('/Developer/city/:name', function (req, res) {
    DeveloperModel.find({ city: { "$in": [req.params.name] } }, function (err, data) {
        res.json(data);
    });
});

app.get('/Developer/specialization/:name', function (req, res) {
    DeveloperModel.find({ specialization: { "$in": [req.params.name] } }, function (err, data) {
        res.json(data);
    });
});

//--------------------------------------------------------------------------//



app.get('/Hello', function (req, res) {
    res.send('Hello World from NodeJS');
});

app.get('/Goodbye', function (req, res) {
    res.send('GoodBye from NodeJS');
});

app.get('/paramSend/:param', function (req, res) {
    var param = req.params.param;
    res.send(param);
});



var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ip);