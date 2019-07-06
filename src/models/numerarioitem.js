/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('numerarioitem', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processotaxas',
        key: 'idprocesso'
      }
    },
    idnumerario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idnumerarioitem: {
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
    idcontafinanceira: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contafinanceiro',
        key: 'idcontafinanceiro'
      }
    },
    vlitemcalculado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlitemsolicitado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlitemrecebido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idprocessotaxas: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    vltaxanotificacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlnotificacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoeda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    idfaturamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'faturamentoprocesso',
        key: 'idfaturamento'
      }
    },
    idprocessocontainer: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idfaturamentoprocvinculado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idprocessovinculado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sndeclarado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sncourrieradto: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'numerarioitem'
  });
};
