var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Icecream', { title: 'Search Results Icecream' });
});

var express = require('express');
const Icecream_controlers= require('../controllers/Icecream');
var router = express.Router();
/* GET Icecreams */
router.get('/', Icecream_controlers.Icecream_view_all_Page );


module.exports = router;
