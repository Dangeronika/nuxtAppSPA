'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn(
        "todoDBs",
        "checkbox_clicked",
        "checkboxClicked"
        )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn(
        "todoDBs",
        "checkboxClicked",
        "checkbox_clicked"
    )
  }
};
