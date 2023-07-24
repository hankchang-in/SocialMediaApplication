const express =require('express');
const path = require('path');
const router = express.Router();
const passport = require('../auth/passport');
const Posts = require('../models/posts');



// router.get('/' ,Posts.fetchPos);
// router.post('/addPost' , Posts.addPost);