/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexportacaoitem', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processoexportacao',
        key: 'idprocesso'
      }
    },
    idprocessoexportacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaoitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idmercadoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    idncm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    idnaladi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'naladi',
        key: 'idnaladi'
      }
    },
    idunidademedida: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    idufprodutor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'uf',
        key: 'iduf'
      }
    },
    sncertificado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sncalculoembalagem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcalculo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpfinalidademercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txdescricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqmt: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidadeitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlvolume: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsqftunitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsqmtunitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlunitariomercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidounitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlexwmercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsqmtmercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidomercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobrutomercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlacrescimoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldescontoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmcvitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidadebaixadacontainer: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldisponivelcontainer: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nritem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idfaturaexportacaocapa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idfaturaexportacaoitem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpfabricanteexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoafabricanteitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    nratoconcessorio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrfaturaexportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtfaturaexportacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idprocessoexportacaore: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    destaquencm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpercentualcomissaoagenteitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpformapagamentocomissaoagente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlcomissaoagenteitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    certificado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpaisorigem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    sngeradocambio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrlote: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtfabricacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtvalidade: {
      type: DataTypes.DATE,
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idprocessoexportacaocertorigem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idprocessoexportacaocertordem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    invoicerefid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    linerefid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idinstrumentonegociacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'instrumentonegociacao',
        key: 'idinstrumentonegociacao'
      }
    },
    nrordemcompra: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtordemcompra: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpcalculocomissao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txcompldescricaomercadoria: {
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
    vlquantidadeunidadeestatistica: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdcaixas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdmetroqdra: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdpecas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snintegradocodigoentrega: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrcoderpitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idembalagem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'embalagem',
        key: 'idembalagem'
      }
    },
    qtdeembalagem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdeembalagens: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalpallet: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesopallet: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    estabelecimento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    serie: {
      type: DataTypes.STRING,
      allowNull: true
    },
    seqitemnf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrnotaporitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    serienotaporitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idnormatemp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dtnotafiscal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrchaveacessonf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtcotacaonf: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlrtaxacotacaonf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tprateiopesoliquidonf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snintegradoxmlnf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrserieitemnf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idenquadramento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'enquadramentooperacao',
        key: 'idenquadramentooperacao'
      }
    },
    txdescricaocomplementar: {
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
    vlqtdunidadeestatisticanf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalprodutonf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlunitarioreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrlpco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txjustificativadepuracaoestatistica: {
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
    txjustificativadepestat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idincotermitemdue: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'incoterm',
        key: 'idincoterm'
      }
    },
    tptratamentoprioritario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpaisdestino: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    nrcfop: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txinfadicionaisprodnf: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processoexportacaoitem'
  });
};
