'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'username', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('Users', 'senderAddress', {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('Users', 'receiverAddress', {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('Users', 'isReceiver', {
      type: Sequelize.BOOLEAN
    });
    await queryInterface.addColumn('Users', 'isSender', {
      type: Sequelize.BOOLEAN
    });
    await queryInterface.addColumn('Users', 'contactNumber', {
      type: Sequelize.STRING
    });
    await queryInterface.removeColumn('Users', 'firstName');
    await queryInterface.removeColumn('Users', 'lastName');
  },

  async down(queryInterface, Sequelize) {
    // Add back firstName and lastName if rolling back
    await queryInterface.addColumn('Users', 'firstName', {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('Users', 'lastName', {
      type: Sequelize.STRING
    });
    // Remove the newly added columns
    await queryInterface.removeColumn('Users', 'username');
    await queryInterface.removeColumn('Users', 'senderAddress');
    await queryInterface.removeColumn('Users', 'receiverAddress');
    await queryInterface.removeColumn('Users', 'isReceiver');
    await queryInterface.removeColumn('Users', 'isSender');
    await queryInterface.removeColumn('Users', 'contactNumber');
  }
};
