var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) { 
  res.render('index', { title: 'Index' });
});

router.get('/carrinho', function(req, res, next) {
  res.render('carrinho', { title: 'Carrinho' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Carrinho' });
});

router.get('/login', function(req, res, next) {
  res.render('indexLogin', { title: 'SmartShop' });
});

router.get('/perfil', function(req, res, next) {
  res.render('perfil', { title: 'SmartShop' });
});

router.get('/ranking', function(req, res, next) {
  res.render('ranking', { title: 'SmartShop' });
});


router.get('/filtros', function(req, res, next) {
  res.render('filtros', { title: 'SmartShop' });
});
module.exports = router;
