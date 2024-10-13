const { assignTracker } = require('../../use-case/tracker/app')
const { encrypt, decrypt, tokens, hash } = require('../../function/app')

const assign = require('../tracker/assignTracker')

const assignTrackers = assign({ assignTracker })

const services = Object.freeze({
    assignTrackers
})

module.exports = services
module.exports = { assignTrackers } 