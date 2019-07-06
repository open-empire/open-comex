/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contaspagar', {
    idcontaspagar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dtlancamento: {
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
        model: 'favorecidocontacorrente',
        key: 'idpessoa'
      }
    },
    idcontafinanceiro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contafinanceiro',
        key: 'idcontafinanceiro'
      }
    },
    idapuracaoiata: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpformalancamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpclassificacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrcheque: {
      type: DataTypes.STRING,
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
    dtcancelamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtcompetencia: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vrpagamento: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrdesconto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrjuros: {
      type: DataTypes.DOUBLE,
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
    idusuariocanc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    idusuariopagto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    idccfornecedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    nrfatura: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmhistorico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vllancamento: {
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
    vlracrescimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    inchequereemitido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    inchequeagrupado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrcodigobarras: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sncodigobarrasmanual: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idchequecontaspagar: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'chequecontaspagar',
        key: 'idchequecontaspagar'
      }
    },
    identext: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snintegrar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idfavorecidocheque: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    snmanual: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idfechcambiocorretora: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpprocedencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vrbaixado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snadiantamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snpagamentointegrado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtpagamentointegrado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cdauxiliarintegracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idusuarioaprovparapagto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    snaprovparapagto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtaprovparapagto: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'contaspagar'
  });
};
