'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.addColumn('Users', 'age', {
      type: DataTypes.INTEGER
    })
  },

  async down (queryInterface, _) {
    await queryInterface.removeColumn('Users', 'age');
  }
};
