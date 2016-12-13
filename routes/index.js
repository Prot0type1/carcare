var express = require('express');
var router = express.Router();


router.get('/profile', function(req,res,next){
      res.render('profile', { title: 'Profile'});
});

router.get('/register', function(req,res,next){
      res.render('register', { title: 'Registration'});
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CarCare' });
});


router.get('/users', function(req, res, next) {
  res.render('users', { title: 'Home' });
});

router.get('/login', function(req,res,next){
  res.render('login', {title: 'login'});
});
module.exports = router;
