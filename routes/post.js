const express =require('express');
const router = express.Router();
const Post = require('../controller/posts')
const path = require('path');



router.post('/addPost' , Post.addPost)
router.get('/fetchPost' , Post.fetchPost);



module.exports = router;