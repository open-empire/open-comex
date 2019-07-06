/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('historicoddeespecie', {
    idhistoricodde: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'historicodde',
        key: 'idhistoricodde'
      }
    },
    idhistoricoddeespecie: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtde: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    marcacao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'historicoddeespecie'
  });
};
