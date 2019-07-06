/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexportacao', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idprocessoexportacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpessoaimportador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idlocalorigem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'terminalcarga',
        key: 'idterminalcarga'
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
    idpaisdestinofinal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    idlocaldescarga: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'terminalcarga',
        key: 'idterminalcarga'
      }
    },
    idpessoaseguradora: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    tpidiomapedido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpformapagamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpfrete: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idurfdespacho: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'urf',
        key: 'idurf'
      }
    },
    idurfembarque: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'urf',
        key: 'idurf'
      }
    },
    idpessoarepresentante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    txdescricaoexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txdeclaracaoadicional: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idtermopagamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'termopagamento',
        key: 'idtermopagamento'
      }
    },
    idinstrumentonegociacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'instrumentonegociacao',
        key: 'idinstrumentonegociacao'
      }
    },
    txdescricaotermopagamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrcartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpercentualcomissaoagente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxacambio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxacambiodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidadetotalproduto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcubagemtotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidadeembalagemtotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalpallets: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tprateiopesoliquido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tprateiopesobruto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlacrescimototal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldescontototal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snfreteembutido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snseguroembutido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalmcv: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalexw: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcomissaoagente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idpessoadespachante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    tpconsignatario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoaconsignatario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    tpnotificado1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoanotificado1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    tpnotificado2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoanotificado2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    txmarcacaovolumes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txinformacaoembalagem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtprocessoexportacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sncalculado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtmoedacalculo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtcalculo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    snregerada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpagamentoantecipado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpagamentoavista: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    quantidadeparcelas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    periodicidadeparcelas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    indicadorperiodicidade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlparcela: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snprocessoregistradosiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snpackinglist: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sncertificadoorigem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snprotocolo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    origemregerada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndeclaracaosimplificada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    origemdsegerada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassacomissaoagenteitens: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtcertificadofissosanitario: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idoficialautorizado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'funcionario',
        key: 'idfuncionario'
      }
    },
    nrregistrooficial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlsemcoberturacambio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlconsignacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcomcoberturacambio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrlotetransmissaonovoex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpformacomercializacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tprateioseguro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrordemcompra: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtordemcompra: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tprateiodesconto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tprateioacrescimo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcalculocomissao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idquebraauxiliarre: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'quebraauxiliarre',
        key: 'idquebraauxiliarre'
      }
    },
    tpgeracaore: {
      type: DataTypes.STRING,
      allowNull: true
    },
    notafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    serienota: {
      type: DataTypes.STRING,
      allowNull: true
    },
    integracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmarcacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmunidopercartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cnpjunidopercartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enderecounidopercartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrenderecounidopercartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bairrounidopercartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    complenderecounidcartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cepunidopercartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcidadeunidopercartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmpaisunidopercartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmufunidopercartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndeclaracaodespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmveiculo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdnaturezaoperacaodse: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dadosexportadorcartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dadosimportadorcartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dadosconsignatariocartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dadosnotificadorcartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmportoorigemcartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmportodestinocartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcidadeorigemcartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcidadeorigem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    idcidadedestino: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    snrepassaordemcompraitens: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrdue: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrodue: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idpessoadeclarante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idrecintoalfandegadodesp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recintoalfandegado',
        key: 'idrecintoalfandegado'
      }
    },
    idrecintoalfandegadoemb: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recintoalfandegado',
        key: 'idrecintoalfandegado'
      }
    },
    idenquadramento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'enquadramentooperacao',
        key: 'idenquadramentooperacao'
      }
    },
    tpprocessoexportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpformaexportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrruc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txretornodue: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdretornodue: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpambiente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpsituacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idenquadramentosegundo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'enquadramentooperacao',
        key: 'idenquadramentooperacao'
      }
    },
    idenquadramentoterceiro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'enquadramentooperacao',
        key: 'idenquadramentooperacao'
      }
    },
    idenquadramentoquarto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'enquadramentooperacao',
        key: 'idenquadramentooperacao'
      }
    },
    nrsimi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sngeradodue: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtenviadointegracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nmcontatojustificativadue: {
      type: DataTypes.STRING,
      allowNull: true
    },
    emailcontatojustificativadue: {
      type: DataTypes.STRING,
      allowNull: true
    },
    telefonecontatojustificativadue: {
      type: DataTypes.STRING,
      allowNull: true
    },
    prazopretendidodias: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrdossiedigitalatendimento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    telefonecontatojustificativa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndueantecipada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snintegradoitemxmlnf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpsituacaoespecialdue: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdocumentofiscaldue: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpmotivodispensanfdue: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpviatranspespecial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txinformacaojustifretificar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpsituacaooperacionaldue: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tprateiofrete: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrchaveacessodue: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processoexportacao'
  });
};
