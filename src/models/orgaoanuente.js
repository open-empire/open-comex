/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orgaoanuente', {
    idorgaoanuente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdorgaoanuente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmorgaoanuente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cgcorgaoanuente: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'orgaoanuente'
  });
};
