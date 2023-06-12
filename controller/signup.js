const Users = require('../models/users');



module.exports.userSignup = (req,res)=>{
    const {username , password} = req.body
    Users.create({username,password})
    .then((data)=>{
        console.log(data);
        res.render('login');
    })
    .catch((err)=>{
        console.log(err)
    })
}