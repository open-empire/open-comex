/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('classemercadoriaperigosa', {
    idclassemercadoriaperigosa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdclassemercadoriaperigosa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmclassemercadoriaperigosa: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'classemercadoriaperigosa'
  });
};
