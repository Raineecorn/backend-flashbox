const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const jwt = require('jsonwebtoken')
dotenv.config()
const app = express()


//configure here
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//port used 3000 if invalid make 5000
const PORT = process.env.PORT || 5000
 


//global routes
//routes for Manipulation of User
app.use('/flashbox/api/user',require('./routes/user/app'))


//return if invalid routes
app.use(async (req, res) => {
    res.status(404).send(`Cant Find Routes`);
  });
  //listen port
app.listen(PORT, () =>
    console.log(`Now Listening to Port ${PORT}!!`))
  
  module.exports = app