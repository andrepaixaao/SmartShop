var express = require('express');
var router = express.Router();
var smartshopDAO = require("../models/SmartShopDAO");


router.post("/VerificarUser", function(req,res,next){

    smartshopDAO.verifyUser(req.body,function(err,result){
        if(err){
            res.statusMessage = result.status;
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)

});


router.get('/carrinho/:id', function(req, res, next){
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



router.get('/lista/MinhasListas/:id', function(req, res, next){
    var user=req.params.id;
      smartshopDAO.getMinhasListas(user,function(err,result){
        if (err) {
            res.statusMessage=result.status;
            res.status(result.code).json(err);
            return;
        }
        console.log(result.data);
        res.status(result.code).send(result.data);
    },next)
  });

  router.get('/carrinho/contarProdutos/:id', function(req, res, next){
      
    var user=req.params.id;
      smartshopDAO.getContagemCarrinho(user,function(err,result){
        if (err) {
            res.statusMessage=result.status;
            res.status(result.code).json(err);
            return;
        }
        console.log(result.data);
        res.status(result.code).send(result.data);
    },next)
  });

  router.get('/lista/ListasPartilhadas/:id', function(req, res, next){
    var user=req.params.id;
      smartshopDAO.getListasPartilhadas(user,function(err,result){
        if (err) {
            res.statusMessage=result.status;
            res.status(result.code).json(err);
            return;
        }
        console.log(result.data);
        res.status(result.code).send(result.data);
    },next)
  });

  
router.get('/carrinho/ApagarCarrinho/:id', function(req, res, next){
    var user=req.params.id;
      smartshopDAO.ApagarCarrinho(user,function(err,result){
        if (err) {
            res.statusMessage=result.status;
            res.status(result.code).json(err);
            return;
        }
        console.log(result.data);
        res.status(result.code).send(result.data);
    },next)
  });

  router.post("/carrinho/ranking/distancia", function(req,res,next){
    smartshopDAO.getRankingDistancia(req.body,function(err,result){
        if(err){
            res.statusMessage = result.status;
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)
  
  });

  router.post("/carrinho/ranking/trajeto", function(req,res,next){
    smartshopDAO.getRankingRota(req.body,function(err,result){
        if(err){
            res.statusMessage = result.status;
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)
  
  });
  

  router.post("/lista/UsarLista", function(req,res,next){
    smartshopDAO.UsarLista(req.body,function(err,result){
        if(err){
            res.statusMessage = result.status;
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)
  
  });

  router.get('/lista/VerLista/:id', function(req, res, next){
    var id=req.params.id;
      smartshopDAO.getLista(id,function(err,result){
        if (err) {
            res.statusMessage=result.status;
            res.status(result.code).json(err);
            return;
        }
        console.log(result.data);
        res.status(result.code).send(result.data);
    },next)
  });

  
  router.get('/nome/:id', function(req, res, next){
    var id=req.params.id;
      smartshopDAO.getUtilizador(id,function(err,result){
        if (err) {
            res.statusMessage=result.status;
            res.status(result.code).json(err);
            return;
        }
        console.log(result.data);
        res.status(result.code).send(result.data);
    },next)
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


router.post("/lista/addLista", function(req,res,next){

    smartshopDAO.addLista(req.body,function(err,result){
        if(err){
            res.statusMessage = result.status;
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)

});

router.post("/lista/addProdutosLista", function(req,res,next){

    smartshopDAO.addProdutosLista(req.body,function(err,result){
        if(err){
            res.statusMessage = result.status;
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)

});


router.get("/lista/idLista", function(req,res,next){

    smartshopDAO.getIdLista(function(err,result){
        if(err){
            res.statusMessage = result.status;
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)

});

router.post("/lista/PartilharLista", function(req,res,next){
    smartshopDAO.PartilharLista(req.body,function(err,result){
        if(err){
            res.statusMessage = result.status;
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)
  
  });

  router.post("/Carrinho/apagarUnidade", function(req,res,next){
    smartshopDAO.ApagarUn(req.body,function(err,result){
        if(err){
            res.statusMessage = result.status;
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)
  
  });

  router.post("/Carrinho/apagarProduto", function(req,res,next){
    smartshopDAO.ApagarProduto(req.body,function(err,result){
        if(err){
            res.statusMessage = result.status;
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)
  
  });

  router.post("/carrinho/addProdutos", function(req,res,next){
    smartshopDAO.addCarrinho(req.body,function(err,result){
        if(err){
            res.statusMessage = result.status;
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)
  
  });

  router.get('/carrinho/ranking/:id', function(req, res, next){
    var user=req.params.id;
      smartshopDAO.getRanking(user,function(err,result){
        if (err) {
            res.statusMessage=result.status;
            res.status(result.code).json(err);
            return;
        }
        console.log(result.data);
        res.status(result.code).send(result.data);
    },next)
  });
module.exports = router;