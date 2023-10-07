const jwt = require('jsonwebtoken');
const {promisify} = require('util')
module.exports =async (req,res,next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if(!token){
            return res.status(400).json({message:'Invalid token'});
        }
        const decoded = await promisify(jwt.verify)(token,process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({message:'Invalid token'})
    }
}