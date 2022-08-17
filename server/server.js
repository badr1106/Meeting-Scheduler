const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('./config/db')

dotenv.config()

connectDB()

const users = require('./routes/users')
const meetings = require('./routes/meetings')

const app = express()

app.use(express.json())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use('/users', users)
app.use('/meetings', meetings)

const PORT = process.env.PORT || 5000
const BUILD = process.env.NODE_ENV

app.listen(
  PORT,
  console.log(`Server running in ${BUILD} mode on port ${PORT}`.yellow.bold)
)
