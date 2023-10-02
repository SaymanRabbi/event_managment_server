const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please add a title'],
        trim:true,
        unique:true,
    },
        address:{
            type:String,
            required:[true,'Please add an address'],
            trim:true,
            unique:true,
    },
        date:{
            type:String,
            required:[true,'Please add a date'],
            trim:true,

        }
},{
    timestamps:true
})
const Event = mongoose.model('Event',eventSchema);
module.exports = Event;