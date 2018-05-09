var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    
   });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
  res.render('helloworld', { title: 'Hello, World!' });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('users');
  collection.find({},{},function(e,docs){
    console.log(docs);
      res.render('userlist', {
          "userlist" : docs
      });
  });
});
/* GET characters page. */
router.get('/characters', function(req, res) {
  var db = req.db;
  var collection = db.get('characters');
  collection.find({},{},function(e,docs){
    console.log(docs);
      res.render('characters', {
          "characters" : docs
      });
  });
});
/* GET locations page. */
router.get('/locations', function(req, res) {
  var db = req.db;
  var collection = db.get('locations');
  collection.find({},{},function(e,docs){
    console.log(docs);
      res.render('locations', {
          "locations" : docs
      });
  });
});

/* GET New User page. */
router.get('/newuser', function(req, res) {
  res.render('newuser', { title: 'Add New User' });
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

  // Set our internal DB variable
  var db = req.db;

  // Get our form values. These rely on the "name" attributes
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;

  // Set our collection
  var collection = db.get('users');

  // Submit to the DB
  collection.insert({
      "firstname" : firstname,
      "lastname" : lastname
  }, function (err, doc) {
      if (err) {
          // If it failed, return error
          res.send("There was a problem adding the information to the database.");
      }
      else {
          // And forward to success page
          res.redirect("userlist");
      }
  });
});

module.exports = router;