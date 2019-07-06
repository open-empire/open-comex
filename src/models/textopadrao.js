/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('textopadrao', {
    idtextopadrao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdtextopadrao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmtextopadrao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmtextopadrao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmtextopadrao1: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'textopadrao'
  });
};
