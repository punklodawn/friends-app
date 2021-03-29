const express = require('express');
const router = express.Router();
const path = require("path");
/* GET home page. */

router.get('/ping', function(req, res, next) {
  res.send('pong');
});

router.get('*', function(req, res){
  res.sendFile(path.join(__dirname,'..', 'public/errors'),'404.html');
});

module.exports = router;
