'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable(
        "todoDBs",
        "todos"
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable(
    "todos",
        "todoDBs"
  )
  }
};
