const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const bcrypt = require('bcryptjs');
//preparation
const encrypts = require('./encrypt')

const decrypts = require('./decrypt')

const dateconv = require('./Dateconverter')

const token = require('./token')

//data hashing
const hashing = require('./hashing')

const buildConditions = require('./buildCondition');

//attaching imports
const dateConverter = dateconv({})

const tokens = token({})

const encrypt = encrypts({jwt,dotenv,tokens})

const decrypt = decrypts({jwt,dotenv})

const hash = hashing({bcrypt,dotenv})

const buildCondition = buildConditions()
 
const services = Object.freeze({
    decrypt,encrypt,tokens,dateConverter,hash,buildCondition
})
 
module.exports = services
module.exports = {encrypt,decrypt,tokens,dateConverter,hash,buildCondition}