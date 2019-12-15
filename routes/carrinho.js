var express = require('express');
var router = express.Router();
var smartshopDAO = require("../models/SmartShopDAO");


router.get('/:id', function(req, res, next){
    var user=req.params.id;
      smartshopDAO.getCarrinho(user,function(err,result){
        if (err) {
            res.statusMessage=result.status;
            res.status(result.code).json(err);
            return;
        }
        console.log(result.data);
        res.status(result.code).send(result.data);
    },next)
  });

  
module.exports=router;

  