/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('faturamentoprocesso', {
    idfaturamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'faturamento',
        key: 'idfaturamento'
      }
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    vlcreditoprocesso: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldebitoprocesso: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsaldoprocesso: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlliquidoprocesso: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlreceitaprocesso: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesaprocesso: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxacomercial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlissprocesso: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sntransferenciafinanceira: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'faturamentoprocesso'
  });
};
