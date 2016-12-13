var express = require('express');
var router = express.Router();

// mongoose connection
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');

// schema (blueprint)
var Schema = mongoose.Schema;

var userDataSchema = new Schema({
  name: String,
  email: String,
  make: String,
  vehcile: String,
  model: String,
  password: String,
  confirmpassword: String
});

// model (access to the collection)
var UserData = mongoose.model('UserData', userDataSchema);

// insert (CRUD)
router.post('/insert', function(req,res,next){

  var item = {
    name : req.body.name,
    email : req.body.email,
    make : req.body.make,
    vehicle : req.body.vehicle,
    model : req.body.model,
    password : req.body.password,
    confirmpassword : req.body.confirmpassword
  };

  var data = new UserData(item);

  data.save();
  res.redirect('/');

});

router.get('/get-data', function(req,res,next){
  UserData.find()
    .then(function(doc){
      res.render('index', {items: doc});
    });
});

// get (CRUD)
router.get('/data', function(req,res,next){
  UserData.find()
    .then(function(doc){
      res.render('data', {items: doc});
    });
});

// delete (CRUD)
router.post('/delete', function(req,res,next) {
  var id = req.body.id;
  UserData.findByIdAndRemove(id).exec();
  res.redirect('/');
});

// delete from button
router.get('/deletebtn/:id', function(req,res,next) {
  var id = req.params.id;
  UserData.findByIdAndRemove(id).exec();
  res.redirect('/data');
});

// update (CRUD)
router.post('/update', function(req,res,next){
  var id = req.body.id;

  UserData.findById(id, function(err,doc){
    if (err) {
      console.error('error, no entry found');
    }

    doc.name = req.body.name;
    doc.email = req.body.email;
    doc.make = req.body.make;
    doc.vehicle = req.body.vehicle;
    doc.model = req.body.model;
    doc.password = req.body.password;
    doc.confirmpassword = req.body.confirmpassword;
    doc.save();
  });
  res.redirect('/');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/users', function(req, res, next) {
  res.render('users', { title: 'Home' });
});


router.get('/login', function(req,res,next){
  res.render('login', {title: 'login'});
});

router.get('/register', function(req,res,next){
  res.render('register', {title: 'Registration'});
});

router.get('/', function(req, res, next) {
  res.render('', { title: '' });
});


module.exports = router;
