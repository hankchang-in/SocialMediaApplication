const express =require('express');
const path = require('path');
const router = express.Router();
const passport = require('../auth/passport');
const users = require('../models/users');


router.post('/' , (req,res , next)=>{
    const {username , password} = req.body;
    users.create({username, password})
    .then((users) => {
      console.log(users);
    }).catch((err) => {
      console.log(err);  
    });
  
    console.log(username, password);
    res.render('home');
    // next();
  })
  