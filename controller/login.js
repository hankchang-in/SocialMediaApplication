const Users = require('../models/users');

module.exports.userLogin = (req,res)=>{
    // const {} = req.body;
    let username = req.body
    let password = req.body
    Users.findOne({username , password})
    .then((data)=>{
        console.log(data)
        res.render('home' , {data} );
        
    })
    .catch((err)=>{
        res.send(err);
    })
}