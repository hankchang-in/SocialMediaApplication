const mongoose = require('mongoose');
// import mongoose, { mongo } from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    name : String,
    paswword : Number
});


module.exports.Users = mongoose.model('users' , userSchema);