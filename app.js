var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var produtosRouter = require('./routes/produtos');
var utilizadorRouter = require('./routes/utilizador');
var carrinhoRouter= require('./routes/carrinho');
var rankingRouter = require('./routes/ranking');
var filtrosRouter=require('./routes/filtros');
var procuraRouter=require('./routes/procura');
var marcaRouter=require('./routes/marca');

var app = express();

// view engine setup
app.set('views', path.join(__dirname,'views'));
app.set('view engine','hbs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/produtos', produtosRouter);
app.use('/api/utilizador', utilizadorRouter);
app.use('/api/carrinho',carrinhoRouter);
app.use('/api/ranking',rankingRouter);
app.use('/api/filtros',filtrosRouter);
app.use('/api/procura',procuraRouter);
app.use('/api/marca',marcaRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});




module.exports = app;
