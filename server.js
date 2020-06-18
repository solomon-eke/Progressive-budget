const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const compression = require('compression')

const PORT = process.env.PORT || 3000

const app = express()

app.use(logger('dev'))

app.use(compression())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://user:password@ds125716.mlab.com:25716/heroku_tnl4sd3b', {
  useNewUrlParser: true,
  useFindAndModify: false
})

// routes
app.use(require('./routes/api.js'))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`)
})
