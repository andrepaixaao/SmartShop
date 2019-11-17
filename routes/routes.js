var express = require('express');
var SmartShopDAO = require('../models/SmartShopDAO');
var router = express.Router();

// TODO: Some repetition here on the error handling... 


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index.html', { title: 'Index' });
});



module.exports = router;
