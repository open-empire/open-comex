/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('integrafaturamentoitem', {
    idintegrafaturamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'integrafaturamento',
        key: 'idintegrafaturamento'
      }
    },
    idintegrafaturamentoitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fatura: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    valor: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valorimposto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    gitarifa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dataregistro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    operador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gitarifabk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    numerobroker: {
      type: DataTypes.STRING,
      allowNull: true
    },
    exportado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'integrafaturamentoitem'
  });
};
