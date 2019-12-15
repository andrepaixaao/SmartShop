var express = require('express');
var router = express.Router();
var smartshopDAO = require("../models/SmartShopDAO");

router.get('/', function(req, res, next){
    smartshopDAO.getItems(function(err,result){
      if (err) {
          res.statusMessage=result.status;
          res.status(result.code).json(err);
          return;
      }
      res.status(result.code).send(result.data);
  },next)
});



router.post("/addProdutos", function(req,res,next){
  smartshopDAO.addCarrinho(req.body,function(err,result){
      if(err){
          res.statusMessage = result.status;
          res.status(result.code).json(err);
          return;
      }
      res.status(result.code).send(result.data);
  }, next)

});
module.exports = router;
  