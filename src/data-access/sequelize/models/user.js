'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Maintain your associations here
    }
  };
  User.init({
    fullname: DataTypes.STRING,  // Renamed from username
    email: DataTypes.STRING,
    address: DataTypes.STRING,   // New combined address field
    isReceiver: DataTypes.BOOLEAN,
    isSender: DataTypes.BOOLEAN,
    contactNumber: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
  });
  return User;
};
