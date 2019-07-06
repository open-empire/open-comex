/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidoembarqueitemacesscust', {
    idpedidoembarquecapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pedidoembarqueitemacessorio',
        key: 'idpedidoembarquecapa'
      }
    },
    idpedidoembarqueitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpedidoembarqueitemacessorio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpedidoembarqueitemacesscust: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vlcustoprevisao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcustoefetivo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'pedidoembarqueitemacesscust'
  });
};
