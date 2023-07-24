const Posts = require('../models/posts');

module.exports.fetchPost = async (req,res)=>{
    try{    

        const posts = await Posts.find({})
        if(posts){
            console.log(posts)
            res.render('home' , {posts})
        }
        else{
            res.send('no user found!!')
        }
    }   
    catch{
        console.log('err');
        // res.send(err)
    }
}

module.exports.addPost = (req,res)=>{
    const {username  , caption , imgURL } = req.body

    Posts.create({username , caption , imgURL })
    .then((data)=>{
        console.log(data);
        res.send('post added');
    })
    .catch((err)=>{
        console.log(err)
        res.send('cannt post')
    })
}