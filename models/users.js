'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    age: DataTypes.INTEGER,
    dob: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Users',
    timestamps:false
  });
  return Users;
};