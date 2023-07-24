const mongoose = require('mongoose');
const {Schema} = mongoose;


const postSchema = new Schema({
    username : String,
    caption : String,
    imgURL : String,
    likes : Number,
});

module.exports = mongoose.model('Post' , postSchema);
