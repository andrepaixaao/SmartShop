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

router.get("/filtros/categoria/:id", function(req,res,next){
  var id=req.params.id;
  smartshopDAO.getProdutosFiltro(id,function(err,result){
      if(err){
          res.statusMessage = result.status;
          res.status(result.code).json(err);
          return;
      }
      res.status(result.code).send(result.data);
  }, next)
});


router.get("/filtros/pesquisa/:id", function(req,res,next){
  var id=req.params.id;
  smartshopDAO.getProdutosProcura(id,function(err,result){
      if(err){
          res.statusMessage = result.status;
          res.status(result.code).json(err);
          return;
      }
      res.status(result.code).send(result.data);
  }, next)
});


router.get("/filtros/marca/:id", function(req,res,next){
  var id=req.params.id;
  smartshopDAO.getProdutosMarca(id,function(err,result){
      if(err){
          res.statusMessage = result.status;
          res.status(result.code).json(err);
          return;
      }
      res.status(result.code).send(result.data);
  }, next)
});


router.get("/tipo", function(req,res,next){
  smartshopDAO.getTipo(function(err,result){
      if(err){
          res.statusMessage = result.status;
          res.status(result.code).json(err);
          return;
      }
      res.status(result.code).send(result.data);
  }, next)
});

router.get("/marca", function(req,res,next){
  smartshopDAO.getMarca(function(err,result){
      if(err){
          res.statusMessage = result.status;
          res.status(result.code).json(err);
          return;
      }
      res.status(result.code).send(result.data);
  }, next)
});

router.get("/:id", function(req,res,next){
  var id=req.params.id;
  smartshopDAO.getProdutosFiltro(id,function(err,result){
      if(err){
          res.statusMessage = result.status;
          res.status(result.code).json(err);
          return;
      }
      res.status(result.code).send(result.data);
  }, next)
});

router.get("/vistadetalhada/:id", function(req,res,next){
  var id=req.params.id;
  smartshopDAO.getProduto(id,function(err,result){
      if(err){
          res.statusMessage = result.status;
          res.status(result.code).json(err);
          return;
      }
      res.status(result.code).send(result.data);
  }, next)
});

router.get("/vistadetalhada/sugestao/:id", function(req,res,next){
  var id=req.params.id;
  smartshopDAO.getProdutosSugestao(id,function(err,result){
      if(err){
          res.statusMessage = result.status;
          res.status(result.code).json(err);
          return;
      }
      res.status(result.code).send(result.data);
  }, next)
});

module.exports = router;
  