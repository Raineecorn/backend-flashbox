const { encrypt, decrypt, tokens } = require('../../function/app')
const userQuery = require('../../data-access/connection/user/app')
const trackingQuery = require('../../data-access/connection/tracker/app')
const { makeTracker } = require('../../entities/tracker/makeTracker')

const assign = require('../tracker/assignTracker')

const assignTracker = assign({ userQuery,trackingQuery,makeTracker })
const services = Object.freeze({
    assignTracker
})

module.exports = services
module.exports = { assignTracker }