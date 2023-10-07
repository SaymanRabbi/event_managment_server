const Event = require("../models/event.Model");
const moment = require('moment');
module.exports.creteEvenetControler = async(req,res)=>{
    try {
       
        const {date}= req.body;
        // const parsedDate = moment(date, 'ddd MMM DD YYYY HH:mm:ss [GMT]ZZ (z)');
        //    const formattedDate = parsedDate.format('Do MMMM YYYY');
        const formattedDate = moment(date, 'DD-MM-YYYY').format('ddd Do MMMM YYYY');
        // output : "12th August 2023"
        // const formattedDate = moment(date, 'M/D/YYYY').format('ddd MMM DD YYYY');
        // Output: "Mon Oct 02 2023"
        const eventData = {
            ...req.body,
            date: formattedDate
        }
        const event = await Event.create(eventData);
        await event.save();
        res.status(200).json({
            success:true,
            data:event
        })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
exports.getEvenetControler = async(req,res)=>{
    try {
       
        const data = await Event.find({});
        res.status(200).json({
            success:true,
            data:data
        })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}