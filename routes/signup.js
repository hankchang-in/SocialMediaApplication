const express =require('express');
const path = require('path');
const router = express.Router();
const passport = require('../auth/passport');
const users = require('../models/users');
const signup = require('../controller/signup');

router.get('/' , (req,res)=>{
  res.render('signup')
})

router.post('/createUser' , signup.userSignup)
  

module.exports = router