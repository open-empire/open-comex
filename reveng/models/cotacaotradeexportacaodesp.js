/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cotacaotradeexportacaodesp', {
    idcotacaotradeexportacaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'cotacaotradeexportacaocapa',
        key: 'idcotacaotradeexportacaocapa'
      }
    },
    idcotacaotradeexportacaodesp: {
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
    idmoeda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    vldespesamoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesaconvertido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snembutidoitens: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'cotacaotradeexportacaodesp'
  });
};
