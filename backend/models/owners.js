'use strict';
module.exports = (sequelize, DataTypes) => {
  const owners = sequelize.define('owners', {
    laptop_id: DataTypes.INTEGER,
    owner_name: DataTypes.STRING,
    date: DataTypes.STRING
  }, {});
  owners.associate = function(models) {
    // associations can be defined here
  };
  return owners;
};