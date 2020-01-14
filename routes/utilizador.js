<<<<<<< HEAD
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



router.get('/MinhasListas/:id', function(req, res, next){
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

  
router.get('/ApagarCarrinho/:id', function(req, res, next){
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

  router.post("/UsarLista", function(req,res,next){
    smartshopDAO.UsarLista(req.body,function(err,result){
        if(err){
            res.statusMessage = result.status;
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)
  
  });

  router.get('/VerLista/:id', function(req, res, next){
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


router.post("/addLista", function(req,res,next){

    smartshopDAO.addLista(req.body,function(err,result){
        if(err){
            res.statusMessage = result.status;
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)

});

router.post("/addProdutosLista", function(req,res,next){

    smartshopDAO.addProdutosLista(req.body,function(err,result){
        if(err){
            res.statusMessage = result.status;
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)

});


router.get("/idLista", function(req,res,next){

    smartshopDAO.getIdLista(function(err,result){
        if(err){
            res.statusMessage = result.status;
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)

});

router.post("/PartilharLista", function(req,res,next){
    smartshopDAO.PartilharLista(req.body,function(err,result){
        if(err){
            res.statusMessage = result.status;
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)
  
  });

=======
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



router.get('/MinhasListas/:id', function(req, res, next){
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

  
router.get('/ApagarCarrinho/:id', function(req, res, next){
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

  router.post("/UsarLista", function(req,res,next){
    smartshopDAO.UsarLista(req.body,function(err,result){
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


router.post("/addLista", function(req,res,next){

    smartshopDAO.addLista(req.body,function(err,result){
        if(err){
            res.statusMessage = result.status;
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)

});

router.post("/addProdutosLista", function(req,res,next){

    smartshopDAO.addProdutosLista(req.body,function(err,result){
        if(err){
            res.statusMessage = result.status;
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)

});


router.get("/idLista", function(req,res,next){

    smartshopDAO.getIdLista(function(err,result){
        if(err){
            res.statusMessage = result.status;
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)

});


>>>>>>> master
module.exports = router;