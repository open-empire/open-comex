/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidoembarquepackinglist', {
    idpedidoembarquecapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pedidoembarquecapa',
        key: 'idpedidoembarquecapa'
      }
    },
    idpedidoembarquecontainer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpedidoembarquepackinglist: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrpackinglist: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtpackinglist: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'pedidoembarquepackinglist'
  });
};
