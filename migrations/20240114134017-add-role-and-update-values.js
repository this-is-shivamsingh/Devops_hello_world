'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.addColumn('Users', 'role', {
      type: DataTypes.STRING
    })
  },

  async down (queryInterface, _) {
    await queryInterface.removeColumn('Users', 'role');
  }
};
