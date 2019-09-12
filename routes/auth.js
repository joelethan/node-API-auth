const router = require('express').Router();
const User = require('../model/User')
const { registerValidation, loginValidation } = require('../validations')
const bcrypt = require('bcryptjs')


router.post('/register', async (req, res)=>{

    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send({'error': error.details[0].message});

    // Check if user already exists
    const emailExists = await User.findOne({email: req.body.email});
    if(emailExists) return res.status(400).send({'error': 'Email already exists'});

    // Hash password
    const salt = await bcrypt.genSalt(6);
    const passwordHash = await bcrypt.hash(req.body.password, salt);

    // Create new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: passwordHash
    })
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err) {
        res.status('400').send(err)
    }
})


module.exports = router;
