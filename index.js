const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const routes = require('./routes/index');
const subscribe = require('./routes/subscribe');
const users = require('./routes/users');

const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

// views is directory for all template files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

const server = app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});

const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

app.set('socketio', io);
app.post('/subscribe', subscribe);

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  console.log(err.message);
});


module.exports = app;
