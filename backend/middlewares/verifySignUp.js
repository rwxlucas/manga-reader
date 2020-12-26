const User = require('../models/userModel')

const checkDuplicate = (req, res, next) => {
    if (!req.body.password || !req.body.password || !req.body.email) {
        return res.status(400).send({ message: 'Incomplete request!' })
    }

    // Check Username
    User.findOne(
        { username: req.body.username },
        (err, user) => {
            if (err) {
                return res.status(500).send({ message: err })
            }

            if (user) {
                return res.status(400).send({ message: 'Username already exists!' })
            }

            // Check email
            User.findOne(
                { email: req.body.email },
                (err, email) => {
                    if (err) {
                        return res.status(500).send({ message: err })
                    }
        
                    if (email) {
                        return res.status(400).send({ message: 'Email already exists!' })
                    }
                    next()
                }
            )
        }
    )
}




module.exports = {
    checkDuplicate
}