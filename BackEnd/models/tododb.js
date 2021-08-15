'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todoDB extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  todoDB.init({
    title: DataTypes.STRING,
    checkboxClicked: DataTypes.BOOLEAN,
    completed: DataTypes.BOOLEAN,
    rename: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'todoDB',
  });
  return todoDB;
};
