/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidofinancepagamento', {
    idpedidofinance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pedidofinance',
        key: 'idpedidofinance'
      }
    },
    idpedidofinancepagamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrparcela: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dtvencimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlparcela: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercentual: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'pedidofinancepagamento'
  });
};
