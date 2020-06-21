var express = require('express');
var router = express.Router();
const User = require('../models/users');
const bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  User.find().then(users=>{
    console.log(users,'11111')
    res.json(users)
  })
});



module.exports = router;
