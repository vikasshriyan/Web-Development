var express = require('express');
var app = express(); //create an instance

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data

app.use(express.static(__dirname + '/public'));

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

var developer = [
 {
     firstName: "Vikas", lastName: "Shriyan", application: [
        { name: "Network Security" }, { name: "Database" }, { name: "PowerPoint" }, ], specialization:"Java", city:"Boston"
 },
{ firstName: "Karthik", lastName: "Mahaley", application: [], specialization: "MongoDB", city: "New York" },
{ firstName: "Shakti", lastName: "Prasad", application: [], specialization: "PHP", city: "Miami" },
{ firstName: "Bob", lastName: "Marley", application: [], specialization: "Python", city: "LA" },
{ firstName: "Pankaj", lastName: "Tripathi", application: [], specialization: "C++", city: "California" }, ]


app.get("/developer", function (req, res) { // get function to get a response from the server<br />
    res.json(developer);// send the whole developer array.<br />
});

app.get("/developer/:index", function (req, res) { // to access a particular developer<br />
    var idx = req.params['index']; //. notation (req.params.index), fetch the index from the url<br />
    res.json(developer[idx]); // send that particular array using the index.<br />
});

app.get("/developer/:index/application", function (req, res) { // to access a particular field in JSON object<br />
    var idx = req.params['index']; //. notation (req.params.index), fetch the index from the url<br />
    res.json(developer[idx].application); // send that particular field of the JSON object<br />
});

app.get("/developer/:index/application/:apindex", function (req, res) { // to access the value of a field in a JSON abject<br />
    var idx = req.params['index']; //. notation (req.params.index), fetch the developer's index from the url<br />
    var apidx = req.params['apindex']; // fetch the application field's index from the url<br />
    res.json(developer[idx].application[apidx]); // send the value using . notation<br />
});

app.post("/developer", function (req, res) {
    var object = req.body;
    developer.push(object);
    res.json(developer);
});

app.delete("/developer/:id", function (req, res) {
    var index = req.params.id;
    developer.splice(index, 1);
    res.json(developer);
});

app.put("/developer/:id", function (req, res) {
    var index = req.params.id;
    developer[index] = req.body;
    res.json(developers);

});



var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ip);