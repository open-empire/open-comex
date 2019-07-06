/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidoisencao', {
    idpedidoisencao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dtgeracaopedido: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtprotocolopedido: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idqdmontdemonstrativoconsumo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'qdmontdemonstrativoconsumo',
        key: 'idqdmontdemonstrativoconsumo'
      }
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'pedidoisencao'
  });
};
