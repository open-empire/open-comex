/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('diitem', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dicapa',
        key: 'idprocesso'
      }
    },
    iddicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddiitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddiadicao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    nritem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idexportador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    tpfabricexpo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idfabricante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idmercadoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    idnaladincca: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'naladincca',
        key: 'idnaladincca'
      }
    },
    idnaladish: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'naladi',
        key: 'idnaladi'
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
    idpaisaquisicao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    idpaisorigem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    tpcalculoitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idunidmedidacomercializada: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    vlpercdescontoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdeunidcomercializada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdeunidestatistica: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    txdescricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vldescontoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteitemmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmcvitemmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroitemmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlunidcondvenda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlunitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliiitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliiitemdevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipiitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipiitemdevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlantidumpingitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicmsitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicmsitemdevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleitemmac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleitemdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteitemmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroitemmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmcvitemmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlunitariomcvitemmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlacrescimoitemmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducaoitemmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlacrescimoitemmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducaoitemmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesaitemmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesaitemmmerc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesaitemmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idpoitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idpocapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'poitem',
        key: 'idpocapa'
      }
    },
    nrdestaquencm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlaliqicmsitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idcfopitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'naturezaoperacao',
        key: 'idnaturezaoperacao'
      }
    },
    vltaxasiscomexitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpisitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpisitemdevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsitemdevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    strnve: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlcifitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobrutoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbaseicmsitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesaicmsitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasepiscofinsitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasefecpitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfecpitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdepermanencia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtdevidautil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlunidmedidaipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idunidmedidaipi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    vlqtdeunidmedidaipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcapacidaderecipiente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idrecipiente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recipiente',
        key: 'idrecipiente'
      }
    },
    quebraauxiliar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snreclassificaradicao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idprocessoli: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'liitem',
        key: 'idprocesso'
      }
    },
    idlicapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idliitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    vlquantidadedisponivelitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidadebaixadaitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    iddacapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    nrfaturapo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlcifitemmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifitemmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifitemdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldescontoitemmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldescontoitemmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldescontoitemmmerc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfretecollectmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfretecollectmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfretecollectdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfreteprepaidmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfreteprepaidmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfreteprepaiddolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfretenacionalreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfretenacional: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfretenacionaldolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpcambiointegracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpaplicacaointegracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iddaprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    iddaitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    dtenviointegracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrordemcompra: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlbaixadocontainer: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteitemcv: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfretecollectmcv: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfreteprepaidmcv: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfretenacionalmcv: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroitemcv: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlantidumpingitemdevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleitemsfrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleitemmnacsfrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleitemdolarsfrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicmsdeferido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcredpresumido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrinvoicepo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtinvoicepo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrseqinvoicepo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliqicmsauxiliaritem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idarea: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'area',
        key: 'idarea'
      }
    },
    idmoedamercadoriaitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    nrpedido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idmodalidadepagamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modalidadepagamento',
        key: 'idmodalidadepagamento'
      }
    },
    nrparcelas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    periodicidade: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlbasecalculoredicmsitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpsituacaotributariadmi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpespeciesituacaotribdmi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpercagregacaodmi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    iddidmi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    invoicerefid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    linerefid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlbasesubstributaria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldevidosubstributaria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercentualmva: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercentualsubstributaria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    txcompldescricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpisitemvladuaneiro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsitemvladuaneiro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpisitemdevidovladuaneiro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsitemdevidovladuaneiro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    txcompldescricaomercadoria1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txcompldescricaomercadoria2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idunidademedidaestatistica: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    vlafrmmicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tporigemmercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesoliquidounitarioitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbaseicmsantecipacaoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqfatoricmsantecipacaoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicmsantecipacaoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqicmsantecipacaoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpregimetributacaoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpreducaoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliqreducaoicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idfundamentolegalicms: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dispositivolegal',
        key: 'iddispositivolegal'
      }
    },
    snipinaotributavel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpregimetributacaoipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrnotacompltipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrexatovinculadoipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpatovinculadoipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idorgaoatovinculadoipi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orgaoemissaoatolegal',
        key: 'idorgaoemissaoatolegal'
      }
    },
    nratovinculadoipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    anoatovinculadoipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpregimetribpiscofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iddispositivolegalpiscofins: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dispositivolegal',
        key: 'iddispositivolegal'
      }
    },
    idfundamentolegalpiscofins: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'fundamlegalregtribpiscofins',
        key: 'idfundamlegalregtribpiscofins'
      }
    },
    idfundamentolegalreducaobase: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'fundamlegalredpiscofins',
        key: 'idfundamlegalredpiscofins'
      }
    },
    idatovinculadoipi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipoatolegal',
        key: 'idtipoatolegal'
      }
    },
    vlataaereaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldevidomultali: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrecolhermultali: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqcalcmultali: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlacrescimosbaseicmsitemmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlacrescimosbaseicmsitemmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifbaseicmsitemmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifbaseicmsitemmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifbaseicmsitemdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldevidocide: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrecolhercide: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqespecificacide: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdecide: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idprodutosuframa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'produtosuframa',
        key: 'idproduto'
      }
    },
    iddestaquesuframa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'produtosuframa',
        key: 'idproduto'
      }
    },
    txdescricaodestaquesuframa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idsuframacodtributacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'direitofiscal',
        key: 'iddireitofiscal'
      }
    },
    cdsuframamatprimabasica: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdsuframareffab: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrseqpedido: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlrpesovolumetricoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdcentrocusto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vldeducaofreteprepaidmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducaofreteprepaidmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducaofreteprepaidmdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducoesoutrositemmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducoesoutrositemmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'diitem'
  });
};
