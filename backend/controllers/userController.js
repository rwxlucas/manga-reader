const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const signUp = async (req, res) => {

    const newUser = new User({
        username: req.body.username,
        password: await bcrypt.hash(req.body.password, 10),
        email: req.body.email
    })

    newUser.save((err) => {
        if (err) {
            console.log(err)
            return res.status(500).send({ message: err.message })
        }

        return res.status(200).send({ message: `User successfully created!` })
    })
}

const signIn = (req, res) => {

    User.findOne(
        { username: req.body.username },
        async (err, user) => {
            if (err) {
                return res.status(500).send({ message: err })
            }

            if (!user) {
                return res.status(400).send({
                    message: 'User not found!'
                })
            }

            const verifyPassword = await bcrypt.compare(req.body.password,user.password)
            
            if(verifyPassword){
                const token = jwt.sign(
                    {
                        id: user._id
                    },
                    process.env.JWT_SECRET,
                    { expiresIn: 86400 }
                )

                return res.status(200).send({
                    accessToken: token,
                    username: user.username,
                    email: user.email,
                    bookmarks: ['qyeota', 'otario']
                }) 
            }

            return res.status(400).send({message: 'Incorrect credentials.'})
        }
    )
}

module.exports = {
    signUp,
    signIn
}