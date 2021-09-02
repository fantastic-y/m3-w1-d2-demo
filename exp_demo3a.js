var express = require('express');
var router = express.Router();

router.get('/home', function(req,res){
    res.send("Hello world!");
});

router.get('/home', function(req,res){
    res.send("You just call the post method at '/hello'!\n");
});

//export this router to use in 3b
module.exports = router;