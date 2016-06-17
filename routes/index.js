const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

const subscribe = require('./subscribe');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(express.static('css'));

// router.post('/subscribe', (req, res, next) => {
//   res.send('hi');
//   console.log(req.body);
// });
// router.post('/subscribe', subscribe.subscribe);

/* GET home page. */
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// router.post('/subscribe', subscribe.subscribe);

module.exports = router;
