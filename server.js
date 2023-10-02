const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors');
const DBCONNECTION = ()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log('MongoDB Connected!!!'.cyan.bold);
    }).catch((err)=>{
        console.log(err);
    })
}
module.exports = DBCONNECTION;