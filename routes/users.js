var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET NEW USER FORM. */
router.get('/new', function(req, res, next) {
  res.render('new', {title: 'My App', subtitle: 'Sign Up'});
});


module.exports = router;
