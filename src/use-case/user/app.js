const { makeUsers } = require('../../entities/user/app')
const { encrypt,decrypt,tokens } = require('../../function/app')
const query = require('../../data-access/connection/user/app')

const createUser = require('./createUser')
const fetch = require('./fetchUser')

const createUsers = createUser({makeUsers,query})
const fetchUsers = fetch({query})
const services = Object.freeze({
    createUsers,fetchUsers
})

module.exports = services
module.exports = {createUsers,fetchUsers}