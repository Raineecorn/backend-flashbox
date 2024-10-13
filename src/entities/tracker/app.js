const makeTrack = require('./makeTracker')  
//validation
const makeTracker = makeTrack({})  

const services = Object.freeze({
   makeTracker
})

module.exports = services
module.exports = {makeTracker}
