'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employee.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    job_title: DataTypes.STRING,
    street_line_1: DataTypes.STRING,
    street_line_2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    year_hired: DataTypes.INTEGER,
    phone_number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Employee',
    timestamps: false,
    tableName: 'employees'
  });
  return Employee;
};