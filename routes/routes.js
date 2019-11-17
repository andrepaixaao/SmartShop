var express = require('express');
var SmartShopDAO = require('../models/SmartShopDAO');
var router = express.Router();

// TODO: Some repetition here on the error handling... 


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('./index.html', { title: 'Index' });
});



router.get('/', function(req, res, next) {
    SmartShopDAO.getItems(function(err,result){
        if (err) {
            // sending error because its for learning/debugging
            // real project would only send a general message
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    },next)
});
module.exports = router;
