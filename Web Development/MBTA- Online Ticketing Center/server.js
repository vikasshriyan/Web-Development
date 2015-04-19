var express = require('express');
var app = express(); //create an instance

var bodyParser = require('body-parser');
var multer = require('multer');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose');

app.configure(function () {
    app.use(express.static(__dirname + '/public'));
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.session({ secret: 'keyboard cat' }));
    app.use(passport.initialize());
    app.use(passport.session());
});

var connectionString = process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/cs5610';
mongoose.connect(connectionString);


var UserSchema = mongoose.Schema({
    firstName: String,
    lastName:String,
    username: String,
    email: String,
    password: String,
    ticket: [{
        source: String,
        destination: String,
        date:String,
        price:String
    }],
    bookmark: [{ bookmarkName: String }]
    
}, { collection: 'User' });

var UserModel = mongoose.model('UserModel', UserSchema);


passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
},
  function (username, password, done) {
		    UserModel.findOne({ username: username, password: password }, function (err, user) {
		        if (err) {
		            return done(err);
		        }
		        if (!user) {
		            return done(null, false);
		        }
		        return done(null, user);
		    })
		}));


app.post('/signup', function (req, res) {
    var newUser = req.body;
    UserModel.findOne({ username: newUser.username }, function (err, user) {
        if (err) { return next(err); }
        if (user) {
            res.json(null);
            return;
        }
        var newUser = new UserModel(req.body);
        newUser.save(function (err, user) {
                req.login(user, function (err) {
                if (err) { return next(err); }
                res.json(user);
            });
        });
    });
});

app.post('/login', passport.authenticate('local'), function (req, res) {
    var user = req.user;
    res.json(user);
});


passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    done(null, user);
});

app.post('/logout', function (req, res) {
    var currentUser = req.body;
     req.logout();
   // req.session.destroy();
    res.send(currentUser);
});

app.post('/profile', function (req, res) {
    res.json(req.body);
})

app.get('/profile', function (req, res) {
    res.send(req.body);
});

var auth = function (req, res, next) {
    if (!req.isAuthenticated())
        res.send(401);
    else
        next();
};

app.get('/loggedin', function (req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
    console.log(req.user);
});

app.put('/ticket', function (req, res) {
    var ticketDetails = req.body;
    var result = null;
    UserModel.findOne({ username: ticketDetails.username }, function (err, res) {
        UserModel.update({ _id: res._id },
            { $push: { ticket: {$each:[{ source: ticketDetails.source, destination: ticketDetails.destination, date: ticketDetails.date, price: ticketDetails.price}] } } }, function (err, result) {
            if (err) throw err;
            result = result;
            });      
    });
    res.json(result);
});

app.get('/ticketDetails', function (req, res) {
    var user = req.body;
    var foundUser = null;
    UserModel.findOne({ username: user.username }, function (err, user) {
        if (err) throw err;
        foundUser = user;
    })
    res.json(foundUser);
});

app.delete('/delete', function (req, res) {
    var user = req.body;
    var ticket = null;
    UserModel.findOne({ username: user.username }, function (err, res) {
        var arr = res.ticket;
        arr.splice(arr.length - 1, 1);
        UserModel.update({ _id: user._id }, { $set : { ticket: arr } }, function (err, result) {
            if (err) throw err;
            ticket = result;
        })        
    });
    res.json(user);
});

app.delete('/deleteBookmark', function (req, res) {
    var userName = req.body.bookmarkDetails;
    var BookmarkName = req.body.bookmarkName;
   // console.log(userName);
   // console.log(BookmarkName);
    console.log(userName.username);
  //  var userId = req.params.id;
  //  var bookmarkName = req.params.bookmarkId;
    var result = null;
   // console.log(userId);
    console.log(BookmarkName);

    UserModel.findOne({ username: userName.username }, function (err, res) {
        console.log(res);
        //var res = res.bookmark;
        //for (var i = 0; i < res.length; i++) {
        //    if (res[i].bookmarkName == bookmarkName) {
        //        res[i].remove();
        //        break;
        //    }
        //}
        //result = res;
        if (res != null) {
            UserModel.update({ username: res.username },
                        { $pull: { bookmark: { bookmarkName: BookmarkName } } }, function (err, result) {
                            if (err) throw err;
                            result = result;
                        });
        }
        

        //    { bookmark: res }, function (err, result) {
        //    if (err) throw err;
        //    res.send(result);
        //});
       
    });
    //res.send(result);
})

app.post('/bookmark', function(req,res){
    var user = req.body;
    console.log(user);
    var result = null;
    UserModel.findOne({ username: user.username }, function (err, res) {
        UserModel.update({ username: res.username },
           { $push: { bookmark: { $each: [{ bookmarkName: user.stop }] } } }, function (err, result) {
               if (err) throw err;
               result = result;
           });
    });
    res.json(user);
})

app.post('/downloadBookmark', function (req, res) {
    var user = req.body;
    var result = null;
    UserModel.findOne({ username: user.username }, function (err, user) {
        if (err) throw err;
        res.json(user);
    });
    
});

var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 8000;

app.listen(port, ip);