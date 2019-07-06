/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('moedacotacao', {
    idmoedacotacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idmoeda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dtcotacaoinicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlmoedacotacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtcotacaofim: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlmoedacotacaosiscomex: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlparidademoedadolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmoedacotacaocompra: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlparidadecompramoedadolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'moedacotacao'
  });
};
