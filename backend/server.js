require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
//const cors = require('cors')

// connect to express
const app = express()

// connect to mongoose
const dbURI = process.env.DATABASE_URL

mongoose.connect(dbURI)
.catch((error) => {
    console.log('Unable to connect: ' + error)
})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to MongoDB'))

// middleware
//app.use(cors())

// schmema

// routes
app.use(express.json())

const blogsRouter = require('./routes/blogs')
app.use('/blogs', blogsRouter)

app.listen(3001, () => {
    console.log('Server and MongoDB are connected')
})