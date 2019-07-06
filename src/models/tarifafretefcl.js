/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarifafretefcl', {
    idtarifafretecapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tarifafretecapa',
        key: 'idtarifafretecapa'
      }
    },
    idtarifafretefcl: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcontainer: {
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
    vlcustotransportador: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'tarifafretefcl'
  });
};
