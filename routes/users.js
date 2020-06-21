var express = require('express');
var router = express.Router();
const User = require('../models/users');
const bodyParser = require('body-parser');


/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find().then(users=>{
       res.json(users)
  })
});

router.post('/', function(req, res, next) {
    User.create({name:req.body.name})
});


module.exports = router;
