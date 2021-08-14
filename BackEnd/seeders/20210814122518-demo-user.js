'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('todoDBs', [{
        title: 'Test seed?',
        checkbox_clicked: false,
        completed: false,
        rename: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('todoDBs', null, {});
  }
};
