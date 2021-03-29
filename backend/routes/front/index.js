const express = require('express');
const router = express.Router();
var debug = require('debug')('backend:friend-router');

/* GET friends listing. */
router.get('/home', function(request, response) {
    response.send('Ya estoy renderizando front');
});

module.exports = router