var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

router.get('/carrinho', function(req, res, next) {
  res.render('carrinho', { title: 'Carrinho' });
});

router.get('/login', function(req, res, next) {
  res.render('indexLogin', { title: 'SmartShop' });
});

router.get('/perfil', function(req, res, next) {
  res.render('perfil', { title: 'SmartShop' });
});
module.exports = router;
