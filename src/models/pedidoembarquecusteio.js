/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidoembarquecusteio', {
    idpedidoembarquecapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'precustoimpressao',
        key: 'idpedidoembarquecapa'
      }
    },
    idpedidoembarquecusteio: {
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
    idempresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    vlcustoprevisaoreais: {
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
    taxamoedaprevisao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    recuperavel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numerodocumento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpmetodorateio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlcustoprevisao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtcustoprevisao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlcustoefetivo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtcustoefetivo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    snparametros: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndespesabasenfs: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcontafinanceiro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contafinanceiro',
        key: 'idcontafinanceiro'
      }
    },
    solicitacaopagamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idprecustoimpressao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    dtvencimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtpagamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    snbaseicmsentrada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpagamentoitemembarque: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'pedidoembarquecusteio'
  });
};
