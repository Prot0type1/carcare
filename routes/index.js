var express = require('express');
var router = express.Router();

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



module.exports = router;
