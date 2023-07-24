// const Users = require('../models/users');
const Users = require('../models/users')

module.exports.userLogin = async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    
    try{    
        const user = await Users.findOne({username: username , password:password } )
        if(user){
            console.log(user)
            res.render('posts' , {user})
        }
        else{
            
            res.render('login' )

        }
    }   
    catch{
        console.log('err');
        // res.send(err)
    }
}
