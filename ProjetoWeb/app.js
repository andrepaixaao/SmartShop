var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var smartShopRouter=require("./routes/routes");
var app=express();

app.use(logger('dev'));

app.listen();

app.use('/smartshoprouter', smartShopRouter)

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(function(req, res, next) {
    next(createError(404));
  });


  module.exports = app;