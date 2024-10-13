const makeUser = require('./makeUser')  
//validation
const makeUsers = makeUser({})  

const services = Object.freeze({
   makeUsers
})

module.exports = services
module.exports = {makeUsers}
