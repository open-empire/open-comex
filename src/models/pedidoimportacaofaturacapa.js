/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidoimportacaofaturacapa', {
    idpedidoimportacaofaturacapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ano: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idunidadenegocio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoaimportador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    nrfatura: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtfatura: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlfatura: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idpessoaexportador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idtermopagamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'termopagamento',
        key: 'idtermopagamento'
      }
    },
    idmoedafatura: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    idpedidoembarquecapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pedidoembarquecapa',
        key: 'idpedidoembarquecapa'
      }
    },
    tpresponsavelpagto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tipoimportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vldesconto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtconhecimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtembarque: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlsaldofatura: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtenviadointegracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idpedidoimportacaocapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pedidoimportacaocapa',
        key: 'idpedidoimportacaocapa'
      }
    }
  }, {
    tableName: 'pedidoimportacaofaturacapa'
  });
};
