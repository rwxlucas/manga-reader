const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const { userRoute, mangaRoute } = require('./routes')

require('dotenv').config()

// Permission to post/get JSON files
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// Enable cors
const corsOptions = {
    origin: process.env.FRONT_URL
}
app.use(cors(corsOptions))

// API Routes
// User Route
app.use('/api/user', userRoute)
// Manga route
app.use('/api/manga', mangaRoute)

mongoose.connect(
    `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    },
    (err) => {
        if (err) {
            console.log(err)
            process.exit()
            return
        }
        console.log('MongoDB Connected...')
    }
)


app.listen(5000)