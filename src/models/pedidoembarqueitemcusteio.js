/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidoembarqueitemcusteio', {
    idpedidoembarquecapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pedidoembarqueitem',
        key: 'idpedidoembarquecapa'
      }
    },
    idpedidoembarqueitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpedidoembarqueitemcusteio: {
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
    },
    iditemdespesa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemdespesa',
        key: 'iditemdespesa'
      }
    }
  }, {
    tableName: 'pedidoembarqueitemcusteio'
  });
};
