const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const { userRoute, getMangasRoute } = require('./routes')

require('dotenv').config()

// Permition to post/get JSON files
app.use(express.json())
// Enable cors
app.use(cors())


// API Routes 
app.use('/api/user', userRoute)
app.use('/api/books', getMangasRoute)

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