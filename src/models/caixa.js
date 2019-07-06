/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('caixa', {
    idcaixa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dtlancamento: {
      type: DataTypes.DATE,
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
    vrlancamento: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    inconciliado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idusuariolanc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    incancelado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrchequeoperacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpclassificacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtcompetencia: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idunidade: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
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
    dtcancelado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idusuariocanc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    idtransferenciabancaria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'transferenciabancaria',
        key: 'idtransferenciabancaria'
      }
    },
    txhistorico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vrdesconto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vrjuros: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vrir: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vrinss: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vrpcc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vriss: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vrtotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpformalancamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpprocedencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idconciliacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'conciliacao',
        key: 'idconciliacao'
      }
    },
    snintegrar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    historicocancelamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcontroleemprestimo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'controleemprestimo',
        key: 'idcontroleemprestimo'
      }
    },
    cdauxiliarintegracao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'caixa'
  });
};
