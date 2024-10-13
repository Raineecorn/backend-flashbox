'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Login extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Login.belongsTo(models.User, { foreignKey: 'userId' });
    }
  };
  Login.init({
    userId: DataTypes.INTEGER,
    loginTime: DataTypes.DATE,
    logoutTime: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Login',
    tableName: 'Logins'
  });
  return Login;
};