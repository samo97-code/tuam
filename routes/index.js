var express = require('express');
var router = express.Router();
const User = require('../models/users');
const bodyParser = require('body-parser');

/* GET home page. */
router.get('/qwe', function(req, res, next) {
  User.find().then(users=>{
    console.log(users,'11111')
    res.send({success:true,users})
  })
});

router.post('/add',(req,res)=>{
    User.create({name:req.body.name}).then((username)=>{
        res.send({success:true,username})
    })
})

module.exports = router;
