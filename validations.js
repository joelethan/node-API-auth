const joi = require('@hapi/joi');

const registerValidation = (body)=>{
    const schema = {
        name: joi.string().min(6).required(),
        email: joi.string().min(6).required().email(),
        password: joi.string().min(6).required()
    };
    return joi.validate(body, schema)
}

const loginValidation = (body)=>{
    const schema = {
        email: joi.string().min(6).required().email(),
        password: joi.string().min(6).required()
    };
    return joi.validate(body, schema)
}

module.exports.loginValidation = loginValidation
module.exports.registerValidation = registerValidation
