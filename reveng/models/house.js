/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('house', {
    idhouse: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idmaster: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'master',
        key: 'idmaster'
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
    tpdivisaohouse: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlfretetotalmnegcompra: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlotherchargecompra: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlotherchargecompracc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlotherchargecomprapp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlhousecompra: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlprofithousebrasil: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlprofithouseagente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlprofithouse: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldebitobrasilag: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    observacaocliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    observacaointerna: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlcreditobrasilag: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldebitobrasilterc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldebitoagentebr: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldebitoagenteterc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlprofitbrasiltotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlprofitagentetotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcreditobrasil: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldebitobrasil: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlprofitliquidobrasil: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaccount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcreditoagentebr: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltpdivisaohouse: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpstatusaccount: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snfretenotificado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snhawbasagreed: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlotherchargecarrier: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlotherchargeagent: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlotherchargebrasilvenda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlotherchargebrasilcusto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlotherchargeexteriorvenda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlotherchargeexteriorcusto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliata: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcomissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrregistrocehouse: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrocehouse: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtchegadaembarque: {
      type: DataTypes.DATE,
      allowNull: true
    },
    inconsistenciascarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    respinconsistencias: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtatualizacaomantra: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlcomissaomaritima: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    incomissaomaritimafaturada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdnbsprofit: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdnbsfrete: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrdeclaracaoimportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrodi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpregimetributacaoii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlhousemnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasecalculoii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliidevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbaseicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicmsdevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqfecp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfecpdevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrmercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoedamercadoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    nrdire: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtdire: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtpagtodire: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrautenticacaobancariadire: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtcalculodire: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtsaidaterminal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sndireharpia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snpagtodireharpia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtprevmantra: {
      type: DataTypes.DATE,
      allowNull: true
    },
    remessaexpressarecebidopor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtliberacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idpagamentoii: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idpagamentoicms: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sniinotificado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snicmsnotificado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlinvoicecomplementar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsomainvoiceprofitliqbr: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idcoloader: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    nrconhecimentocoloader: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtcoloader: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idtratamentocarga: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tratamentocarga',
        key: 'idtratamentocarga'
      }
    },
    idlocaldestino: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'terminalcarga',
        key: 'idterminalcarga'
      }
    },
    snenviado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlprofitliquidobrasilbrl: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcomissaooverficticio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    txobservacaodevcourier: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtdocexportacaodevcourier: {
      type: DataTypes.DATE,
      allowNull: true
    },
    codmotivodevcourier: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrdocumentodevcourier: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrlotecourier: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'house'
  });
};
