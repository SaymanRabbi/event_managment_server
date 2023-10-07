const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,'Please add an email'],
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        required:[true,'Please add a password'],
        trim:true,
    },
    role:{
        type:String,
        default:'user',
        enum:['user','admin']
    }
},{
    timestamps:true
});

const User = mongoose.model('User',userSchema);
module.exports = User;