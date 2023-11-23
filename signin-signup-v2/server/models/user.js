const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const joi = require('joi')
const passwordComplexity = require('joi-password-complexity')

const userSchema = new mongoose.Schema({
    surname: {type: String, required: true},
    othername: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
})
 
userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn:"2d"})
    return token
}

const User = mongoose.model("user", userSchema);

const validate = (data) =>{
    const schema = joi.object({
        surname:joi.string().required().label("Surname"),
        othername:joi.string().required().label("Othername"),
        email:joi.string().required().label("Email"),
        password: passwordComplexity().required().label("Password")
    })
    return schema.validate(data)
};

module.exports = {User,validate};
