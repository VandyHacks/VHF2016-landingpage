var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var subscribe = require('./routes/subscribe');
var mcapi = require('mailchimp-api');
var keys = require('./keys');

mc = new mcapi.Mailchimp(keys.public_key);

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.post('/subscribe',subscribe.subscribe);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  console.log(err.message);
});


module.exports = app;

