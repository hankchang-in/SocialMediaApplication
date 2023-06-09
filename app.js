//requiring packages section starts from here!!
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 4777;
const hbs = require('hbs');
const passport = require('passport');
// const users = require('./database/data');
const routes = require('./routes/login')
const session = require("express-session");


//requiring packages section ends here!!





///middleware section start from here!!!

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.urlencoded({ extended: true }));
app.use('/' , express.static(path.join(__dirname ,'public')));
app.use(session({
    secret: 'asdfnsdefnsdidacfeafjdjv',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

  app.use(passport.initialize());
  app.use(passport.session());

///middleware section ends here!!!





/// request portion starts from here

app.get('/', routes);   

// app.post('/home' , (req,res)=>{
//     res.send('home')
// })

mongoose.connect('mongodb://localhost:27017')
.then(()=>{
    app.listen(PORT  ,()=>{
        console.log('http://localhost:'+PORT);
    })  
 })
    .catch((err)=>{
         console.log(err);
    })