var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var x = Math.round(Math.random());
    var result = Math.exp(x);

    
    
    res.setHeader('Content-Type', 'text/html'); 
    res.send(`f(exp(${x})) is ${result}`);
});

module.exports = router;