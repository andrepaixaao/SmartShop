var express = require('express');
var router = express.Router();
var smartshopDAO = require("../models/SmartShopDAO");


router.post("/", function(req,res,next){

    smartshopDAO.verifyUser(req.body,function(err,result){
        if(err){
            res.statusMessage = result.status;
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)

});

router.post("/registo", function(req,res,next){

    smartshopDAO.registarUser(req.body,function(err,result){
        if(err){
            res.statusMessage = result.status;
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)

});

module.exports = router;