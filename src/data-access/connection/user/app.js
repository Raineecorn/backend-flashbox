const { connections } = require("../../index");
const { User } = require("../../sequelize/models/index")
const { Op } = require('sequelize');
const { buildCondition } = require('../../../function/app');

const Query = require("./query");


const query = Query({ connections, User, Op, buildCondition });

module.exports = query