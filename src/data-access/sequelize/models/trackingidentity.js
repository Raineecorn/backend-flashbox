'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrackingIdentity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TrackingIdentity.init({
    trackingId: {
      type: DataTypes.STRING,
      unique: true, // Ensure trackingId is unique
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users', // Name of the User model, check your database or User model file for exact naming
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'TrackingIdentity',
    tableName: 'TrackingIdentities'
  });
  return TrackingIdentity;
};