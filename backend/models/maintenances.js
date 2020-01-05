'use strict';
module.exports = (sequelize, DataTypes) => {
  const maintenances = sequelize.define('maintenances', {
    laptop_id: DataTypes.INTEGER,
    date: DataTypes.STRING,
    owner: DataTypes.STRING,
    status: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  maintenances.associate = function(models) {
    // associations can be defined here
  };
  return maintenances;
};