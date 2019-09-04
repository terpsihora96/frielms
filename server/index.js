// The module needed for hiding authentication key - needed later
// Of at utmost importance to be required and configured ASAP
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')

// Creating an Express app
const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Adding routes to the app
app.use('/api', require('./routes/api'))

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
