/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidoimportacaodespesa', {
    idpedidoimportacaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pedidoimportacaocapa',
        key: 'idpedidoimportacaocapa'
      }
    },
    idpedidoimportacaodespesa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iditemdespesa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemdespesa',
        key: 'iditemdespesa'
      }
    },
    vldespesareais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpmetodorateio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndespesabasenfs: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snbaseicmsentrada: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'pedidoimportacaodespesa'
  });
};
