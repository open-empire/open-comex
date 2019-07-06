/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('faturamentoprocessoitem', {
    idfaturamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'faturamentoprocesso',
        key: 'idfaturamento'
      }
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'numerarioitem',
        key: 'idprocesso'
      }
    },
    idfaturamentoprocessoitem: {
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
    snrestituicao: {
      type: DataTypes.STRING,
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
    vldespesamneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idnumerario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idnumerarioitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    sndeclarado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcentroresultado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'centroresultado',
        key: 'idcentroresultado'
      }
    },
    vlunitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdeservico: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idprocessoinvoiceagenciamento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idhouse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrdocumentoauxiliar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpercentualdesconto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snmoedaestrangeira: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idservicosprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    }
  }, {
    tableName: 'faturamentoprocessoitem'
  });
};
