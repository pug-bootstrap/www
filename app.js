var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var alertsRouter = require('./routes/alerts');
var badgesRouter = require('./routes/badges');
var breadcrumbRouter = require('./routes/breadcrumb');
var cardRouter = require('./routes/card');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/accordion', (req, res) => {
  res.render('accordion');
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/alerts', alertsRouter);
app.use('/badges', badgesRouter);
app.use('/breadcrumb', breadcrumbRouter);
app.use('/card', cardRouter);
app.use('/buttons', (req, res) => res.render('buttons', { title: 'pug-bootstrap : Buttons' }));
app.use('/carousel', (req, res) => res.render('carousel', { title: 'pug-bootstrap : Carousel' }));
app.use('/dropdowns', (req, res) => res.render('dropdowns', { title: 'pug-bootstrap : Dropdowns' }));
app.use('/tabs', (req, res) => res.render('tabs', { title: 'pug-bootstrap : Tabs' }));
app.use('/forms', (req, res) => res.render('forms', { title: 'pug-bootstrap : Forms' }));
app.use('/list-groups', (req, res) => res.render('list-groups', { title: 'pug-bootstrap : List groups' }));
app.use('/modal', (req, res) => res.render('modal', { title: 'pug-bootstrap : Modal' }));
app.use('/navbar', (req, res) => res.render('navbar', { title: 'pug-bootstrap : Navbar' }));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
