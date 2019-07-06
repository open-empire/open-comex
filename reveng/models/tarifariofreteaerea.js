/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarifariofreteaerea', {
    idtarifario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tarifario',
        key: 'idtarifario'
      }
    },
    idtarifariofreteaerea: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tpsimbolo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpeso: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcustofrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcustoagente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcustotransportador: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'tarifariofreteaerea'
  });
};
