const jwt = require('jsonwebtoken');
exports.createToken = (user) => {
    const payload ={
        email:user.email,
        id:user._id
    }
    return jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
}