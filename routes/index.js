var express = require('express');
var path = require('path');
var app = express();
var router = express.Router();
var subscribe = require('./subscribe');
var bodyParser = require('body-parser');


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(express.static('css'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname,"..","index.html"));
});

module.exports = router;
