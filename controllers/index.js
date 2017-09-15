var express = require('express');
var router = express.Router();
var path = require('path');

console.log("test");

router.use('/api/main', require('./main'));

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});


module.exports = router;

