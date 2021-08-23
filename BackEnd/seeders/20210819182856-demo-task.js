'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('todos', [{
      title: 'Test seed?',
      checkboxClicked: false,
      completed: false,
      rename: false
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('todos', null, {});
  }
};
