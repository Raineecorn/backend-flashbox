const {createUsers,fetchUsers} = require('../../use-case/user/app')
const {encrypt,decrypt,tokens,hash} = require('../../function/app')
const regester = require('./regesterUser')
const view = require('./viewUser')

const regesterUser = regester({createUsers,hash})
const viewUser = view({fetchUsers})

const services = Object.freeze({
    regesterUser,viewUser
})

module.exports = services
module.exports = {regesterUser,viewUser} 