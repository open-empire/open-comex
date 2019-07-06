/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarifariofretefcl', {
    idtarifario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tarifario',
        key: 'idtarifario'
      }
    },
    idtarifariofretefcl: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idtipocontainer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipocontainer',
        key: 'idtipocontainer'
      }
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
    tableName: 'tarifariofretefcl'
  });
};
