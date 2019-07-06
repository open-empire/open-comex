/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('master', {
    idmaster: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idunidadenegocio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    nrmaster: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idlocalembarque: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'terminalcarga',
        key: 'idterminalcarga'
      }
    },
    idlocaldesembarque: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'terminalcarga',
        key: 'idterminalcarga'
      }
    },
    idagentemaster: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idtransportadormaster: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idmoedamaster: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    idapuracaoiata: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'apuracaoiata',
        key: 'idapuracaoiata'
      }
    },
    tpfretemaster: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrvooviagem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrbooking: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtembarque: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtemissaoconhecimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtprevisaoembarque: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtchegada: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtprevisaochegada: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlquantidademaster: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrmlemnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesotaxadomaster: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snminimomaster: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltarifafretemaster: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tarifaimpressa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretemaster: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idarmazematracacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'armazem',
        key: 'idarmazem'
      }
    },
    idarmazemdescarga: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'armazem',
        key: 'idarmazem'
      }
    },
    idagenciamaritima: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idnavio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'embarcacao',
        key: 'idembarcacao'
      }
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
    idnaviotransbordo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'embarcacao',
        key: 'idembarcacao'
      }
    },
    idlocaltransbordo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'terminalcarga',
        key: 'idterminalcarga'
      }
    },
    nrviagemtransbordo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dttransbordo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idlocalprimeiraescala: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'terminalcarga',
        key: 'idterminalcarga'
      }
    },
    idlocalsegundaescala: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'terminalcarga',
        key: 'idterminalcarga'
      }
    },
    dtsaidaprevistaprimeiraescala: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtsaidaprevistasegundaescala: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idnaviosegundotransbordo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'embarcacao',
        key: 'idembarcacao'
      }
    },
    nrviagemprimeiraescala: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrviagemsegundaescala: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcourier: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    nrconhecimentocourier: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtcourier: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpestufagem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snpagtofretesolicitado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesobrutomaster: {
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
    vltarifacompanhia: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltarifanetnet: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesocubadomaster: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtcalculoprofit: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtfechamentoembarque: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idusuariocalculoprofit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idusuariofechamento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpclassificacaomaster: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpprocedenciamaster: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtabertura: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtdeadline: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtdeadlinedraft: {
      type: DataTypes.DATE,
      allowNull: true
    },
    snasperageement: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlirrf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcomissaoiata: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcomissaoover: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdeprocessoslcl: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtdeprocessosfcl: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtdeprocessos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrregistrocemaster: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaccountmaster: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpstatusaccountmaster: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrocemaster: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idarmazementregadoc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'armazem',
        key: 'idarmazem'
      }
    },
    vlirrfiata: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlirrfover: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltxiata: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltxiatareais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcomissaoreais: {
      type: DataTypes.DOUBLE,
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
    vlfretemasterreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltarifaiata: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snmercantegerado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snmanifestoharpia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snpresencacargaharpia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassefretecustohouse: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlminimoporhouse: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrvoosaida: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlfretemasterreaistela: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlotherchargecarrierreaistela: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlotherchargeagentreaistela: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlirrftela: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlirrfiatatela: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlirrfovertela: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliatareaistela: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcomissaoreaistela: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalsemirrftela: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtvgm: {
      type: DataTypes.DATE,
      allowNull: true
    },
    seqhapia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    snpermitiredicaowin: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'master'
  });
};
