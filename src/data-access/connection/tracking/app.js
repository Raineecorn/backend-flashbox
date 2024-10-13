const { connections } = require("../../index");
const { TrackingIdentity } = require("../../sequelize/models/index")
const { buildCondition } = require('../../../function/app');

const Query = require("./query");


const query = Query({ connections, TrackingIdentity, Op, buildCondition });

module.exports = query