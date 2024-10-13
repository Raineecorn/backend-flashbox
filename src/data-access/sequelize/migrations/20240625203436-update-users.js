'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'address', {
      type: Sequelize.STRING
    });
    await queryInterface.renameColumn('Users', 'username', 'fullname');
    await queryInterface.removeColumn('Users', 'senderAddress');
    await queryInterface.removeColumn('Users', 'receiverAddress');
    await queryInterface.removeColumn('Users', 'password');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'senderAddress', {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('Users', 'receiverAddress', {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('Users', 'password', {
      type: Sequelize.STRING
    });
    await queryInterface.renameColumn('Users', 'fullname', 'username');
    await queryInterface.removeColumn('Users', 'address');
  }
};
