/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidoimportacaoitsaldofatur', {
    idpedidoimportacaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pedidoimportacaoitem',
        key: 'idpedidoimportacaocapa'
      }
    },
    idpedidoimportacaoitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpedidoimportacaoitsaldofatur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpedidoimportacaofatura: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlsaldofatura: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'pedidoimportacaoitsaldofatur'
  });
};
