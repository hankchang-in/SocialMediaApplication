const express =require('express');
const path = require('path');
const router = express.Router();
// const passport = require('../auth/passport');
// const users = require('../models/users');
const loginController = require('../controller/login')


router.post('/' , loginController.userLogin);

module.exports = router;