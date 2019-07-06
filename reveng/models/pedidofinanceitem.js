/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidofinanceitem', {
    idpedidofinance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pedidofinance',
        key: 'idpedidofinance'
      }
    },
    idpedidofinanceitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tplancamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iditemdespesa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemdespesa',
        key: 'iditemdespesa'
      }
    },
    vllancamento: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercentual: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'pedidofinanceitem'
  });
};
