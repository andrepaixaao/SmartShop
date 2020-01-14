var express = require('express');
var router = express.Router();
var smartshopDAO = require("../models/SmartShopDAO");

router.get('/', function(req, res, next) {
    console.log("boas tarde, jovem");
    smartshopDAO.getInfoItem(function(err, result) {
        if (err) {
            // sending error because its for learning/debugging
            // real project would only send a general message
            res.statusMessage = result.status;
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
        console.log(result.data);
    }, next)
});

router.get('/', function(req, res, next) {
    console.log("boas tarde, jovem");
    smartshopDAO.getSugestoes(function(err, result) {
        if (err) {
            res.statusMessage = result.status;
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
        console.log(result.data);
    }, next)
});

module.exports = router;