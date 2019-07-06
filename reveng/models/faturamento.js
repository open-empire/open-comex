/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('faturamento', {
    idfaturamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dtfaturamento: {
      type: DataTypes.DATE,
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
    idempresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    nrnotadespesa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrnotaservico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtemissaonotadespesa: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtemissaonotaservico: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtvencimento: {
      type: DataTypes.DATE,
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
    dtcalculo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtliquidacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlrtotalcredito: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaldebito: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsaldo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlliquidado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtcancelamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    txobservacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalreceita: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalirrf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliss: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaladiantamento: {
      type: DataTypes.DOUBLE,
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
    tpimpressaofaturamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpservico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpisin: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsin: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcsllin: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaldespesa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtenviofinanceiro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    referenciasprocs: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numerosdireprocs: {
      type: DataTypes.STRING,
      allowNull: true
    },
    referenciasclienteprocs: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numerosmasterprocs: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numeroshouseprocs: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quantidadeprocs: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpbaseconversao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtconversaomanual: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpfaturamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idapuracaoiata: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rpsgerado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlinss: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrlotexml: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    identext: {
      type: DataTypes.STRING,
      allowNull: true
    },
    protocolorps: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrrps: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snintegrar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txhistoricoin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpedidofinanceby: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlisssubstitutivo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrin: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrbasecalculoin: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snretido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nftsexportada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txobservacaointerna: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltributoslei12741: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpisrecolhido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsrecolhido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcsllrecolhido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlirrfrecolhido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snconsultadorps: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrefaturado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrserie: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aliquotaestaduallei12741: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotafederallei12741: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotamunicipallei12741: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    fontealiquotaslei12741: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valorestaduallei12741: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valorfederallei12741: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valormunicipallei12741: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    linkimpressao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    autenticidade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlissrecuperar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idusuariorefat: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    dtrefaturamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpformafaturamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigoverificacaorps: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtcancelamentorps: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'faturamento'
  });
};
