const User = require('../models/userModel')
const Manga = require('../models/mangaModel')
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

            const verifyPassword = await bcrypt.compare(req.body.password, user.password)

            if (verifyPassword) {
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
                    bookmarks: [...user.bookmarks]
                })
            }

            return res.status(400).send({ message: 'Incorrect credentials.' })
        }
    )
}

const uploadBookmarks = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if(user.bookmarks.indexOf(req.body.mangaId) === -1){
            user.bookmarks.push(req.body.mangaId)
            user.save()
            return res.send('Favorite added!')
        }else{
            const mangaBooks = user.bookmarks
            mangaBooks.splice(mangaBooks.indexOf(req.body.mangaId), 1)
            user.bookmarks = mangaBooks
            user.save()
            return res.send('Favorite removed!')
        }
    } catch (error) {
        return res.send(error)
    }
}

const getBookmarks = async (req, res) => {
    try {
        const user = await User.findOne({username: req.params.username})
        const mangas = []
        for(const manga of user.bookmarks){
            const mangaItem = await Manga.findOne({_id: manga})
            mangas.push({
                name: mangaItem.name,
                id: mangaItem.id,
                image: mangaItem.thumbnail
            })
        }
        res.send(mangas)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    signUp,
    signIn,
    uploadBookmarks,
    getBookmarks
}