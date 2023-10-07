
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');
const { createToken } = require('../utils/createToken');
const CreateUserControler = async(req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({message:'Please add an email and password'});
        }
        const HashPassworh = await bcrypt.hash(password,10);
        const userData = {
            email,
            password:HashPassworh
        }
        const user = await User.create(userData);
        await user.save();
        const {password:pass,...data} = user.toObject()
        res.status(200).json({
            success:true,
            data:data
        })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const LoginUserControler = async(req,res)=>{
    try {
        const {password,email} = req.body;
        if(!email || !password){
            return res.status(400).json({message:'Please add an email and password'});
        }
        const userFind = await User.findOne({email});
        if(!userFind){
            return res.status(400).json({message:'User not found'});
        }
        const isMatch = await bcrypt.compare(password,userFind.password);
        if(!isMatch){
            return res.status(400).json({message:'Invalid credentials'});
        }
        const {password:pass,...data} = userFind.toObject()
        const token = createToken(userFind);
        res.status(200).json({
            success:true,
            data:data,
            token:token
        })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
module.exports = {
    CreateUserControler,
    LoginUserControler
}