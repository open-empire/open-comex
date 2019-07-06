/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('financeiroporcontas', {
    idfinanceiroporcontas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idfinanceiroporcontasseq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcontafinanceiro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contafinanceiro',
        key: 'idcontafinanceiro'
      }
    },
    periodoinicial: {
      type: DataTypes.DATE,
      allowNull: true
    },
    periodofinal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlpagardia: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlreceberdia: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpagarmes: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrecebermes: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcreditoterceiros: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldebitoterceiros: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsaldoprojetado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsaldobancario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsaldoproprio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'financeiroporcontas'
  });
};
