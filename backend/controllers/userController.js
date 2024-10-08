const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


// @desc new user
// @route POST /api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
    const { email, name, password } = req.body
    if (!email || !name || !password) {
        res.status(400)
        throw new Error("Please add all field")
    }

    //check if user exists
    const userExists = await User.findOne({ email })
  
    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create User
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        user_name:name

    })
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user, email,
            token: generateToken(user._id),
            user_name:name
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc  login user
// @route POST /api/users/login
// @access private
const loginUser = asyncHandler(async (req, res) => {
    const { email, password,user_name } = req.body

    //check for user email
    const user = await User.findOne({ email })
    if (!email || !password || !user_name ) {
        res.status(400)
        throw new Error('Please enter the required field')
    }
    if (user_name.length<4 ) {
        res.status(400)
        throw new Error('Username length is too short')
    }
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user, email,
            token: generateToken(user._id),user_name:user_name
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }

})
// @desc get user
// @route GET /api/users
// @access public
const getUser = asyncHandler(async (req, res) => {
    const { _id, name, email } = await User.findById(req.user.id)
    res.status(200).json(
        {
            id: _id,
            name,
            email
        }
        
    )
})


//Generate Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}


module.exports = {
    loginUser,
    registerUser,
    getUser
}