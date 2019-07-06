/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contacorrenteembarque', {
    idcontacorrenteembarque: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idfaturamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'faturamentoprocesso',
        key: 'idfaturamento'
      }
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    iditem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemdespesa',
        key: 'iditemdespesa'
      }
    },
    idempresalancamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    vritem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtlancamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    tpformalancamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    infaturado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    incancelado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtcancelamento: {
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
    idmoeda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    vrtaxa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlitemmoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtvencimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtpagamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrdocumento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrcheque: {
      type: DataTypes.STRING,
      allowNull: true
    },
    inperda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcontasreceber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idcontasreceberitem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idpagamentoitemembarque: {
      type: DataTypes.INTEGER,
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
    restituir: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpprocedencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpedidoimportacaofaturacapa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idvencto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idfechcambioagenciamento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idfechamentocambiotrade: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'fechamentocambiotrade',
        key: 'idfechamentocambiotrade'
      }
    },
    idapuracaoiata: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpconta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    flagformapagamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snintegrar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndeclarado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcontaspagaritem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idcontaspagar: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contaspagaritem',
        key: 'idcontaspagar'
      }
    },
    idprocessoli: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlrdesconto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlracrescimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snfechamentotrade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snliberadofaturamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snintegrado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrpedidocompraservico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrseqinvoicepo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcontroleemprestimo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'controleemprestimoprocesso',
        key: 'idcontroleemprestimo'
      }
    },
    idcontroleemprestimoprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    dtdocumento: {
      type: DataTypes.DATE,
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
    idfaturamentoprocessovinc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'faturamento',
        key: 'idfaturamento'
      }
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idprocessocontainer: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'contacorrenteembarque'
  });
};
