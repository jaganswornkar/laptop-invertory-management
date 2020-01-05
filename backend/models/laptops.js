'use strict';
module.exports = (sequelize, DataTypes) => {
  const laptops = sequelize.define('laptops', {
    name: DataTypes.STRING,
    owner: DataTypes.STRING,
    image: DataTypes.STRING,
    color: DataTypes.STRING,
    mac: DataTypes.STRING,
    ip: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    battery: DataTypes.BOOLEAN,
    description: DataTypes.TEXT,
    ram: DataTypes.STRING,
    rom: DataTypes.STRING
  }, {});
  laptops.associate = function(models) {
    // associations can be defined here
  };
  return laptops;
};