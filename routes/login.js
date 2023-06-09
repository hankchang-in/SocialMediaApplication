const express =require('express');
const path = require('path');
const router = express.Router();
const passport = require('../auth/passport');

router.get('/' ,(req,res,)=>{
  res.render('login')

})

router.get('/profile' , (req,res,next)=>{
      res.send('profile page')   
});


router.get('/signup' , (req,res)=>{
  res.render('signup');
})

router.get('/home' , (req,res)=>{
  res.render('home');
})
module.exports = router;