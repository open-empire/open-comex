/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('despesadestino', {
    idcotacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'cotacao',
        key: 'idcotacao'
      }
    },
    iddespesadestino: {
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
    vldespesa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesareais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sndespesabasenfs: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'despesadestino'
  });
};
