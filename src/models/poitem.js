/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('poitem', {
    idpocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pocapa',
        key: 'idpocapa'
      }
    },
    idpoitem: {
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
    vlquantidadeitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idunidademedidaitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
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
    vlunitarioitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpcalculoitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlmercadoriaitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldescontoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snnecessitali: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idncm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    vlqtdemedidaestatisticaitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nratodrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpfabricanteexportadoritem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrinvoiceitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtinvoiceitem: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrseqinvoiceitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoaexportadoritem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpaisaquisicaoitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    idpessoafabricanteitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpaisorigemitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    txmercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlquantidadedisponivelitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidadebaixadaitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesaitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretenacionalitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteprepaiditem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretecollectitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nritempo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idnaladi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'naladi',
        key: 'idnaladi'
      }
    },
    quebraauxiliar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliqicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mminformacoesemb: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrdestaquencm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlitemconversao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrdocumentovinculadodi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrcontroleaverage: {
      type: DataTypes.STRING,
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
    idarea: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'area',
        key: 'idarea'
      }
    },
    mmintegracao: {
      type: "OID",
      allowNull: true
    },
    dtenviointegracao: {
      type: DataTypes.DATE,
      allowNull: true
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
    numeroregistroanvisa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtvencregistro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    loteanvisa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    serie: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliqii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqpis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqcofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpregimetributacaoii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpregimetributacaoipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpregimetribpiscofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliqreducaoicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreducaoii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreduzidaipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreducaopis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreducaocofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreduzidaii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpaplicacaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idincotermitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'incoterm',
        key: 'idincoterm'
      }
    },
    txcomplmercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txcomplmercadoria1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txcomplmercadoria2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrordemcompra: {
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
    idcfopitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'naturezaoperacao',
        key: 'idnaturezaoperacao'
      }
    },
    registrominsaude: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtentrega: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtconfirmacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlpesoliquidounitarioitem: {
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
    vlmercadoriaitemreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrseqpedido: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dtvalidadelote: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrregistroli: {
      type: DataTypes.STRING,
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
    nrseqordemcompra: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpocapaorigem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pocapa',
        key: 'idpocapa'
      }
    },
    idpoitemorigem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrpedidodestino: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nritempodestino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlquantidadedestino: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidodestino: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmledestino: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmotivoadmissaotemporaria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'motivoadmissaotemporaria',
        key: 'idmotivoadmissaotemporaria'
      }
    },
    idatovinculadoii: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipoatolegal',
        key: 'idtipoatolegal'
      }
    },
    nratovinculadoii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    anoatovinculadoii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpercreducaoaliqii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idfundamentolegalii: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'fundamentolegalregtrib',
        key: 'idfundamentolegalregtrib'
      }
    },
    nrexatovinculadoii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idorgaoatovinculadoii: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orgaoemissaoatolegal',
        key: 'idorgaoemissaoatolegal'
      }
    },
    tpacordotarifario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliqacordoii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercreducaoaliqipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqicmspiscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercreducaobasepiscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idfundamentoespecificoicms: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'fundamentoespecificoicms',
        key: 'idfundamentoespecificoicms'
      }
    },
    vlaliqfecp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidadeskit: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    alarmamodelo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alarmaprecio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    alarmadivisa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alarmaunidades: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    alarmapeso: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    alarmaidorigem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alarmaorigem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alarmancm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alarmaprovedor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    costesinalarma: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtddispembarqueitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasecalculoii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteprepaidmnacitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretecollectmnacitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretenacionalmnacitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroitemmnac: {
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
    vlii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasecalculoipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasecalculopiscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasecalculoicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxasiscomex: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlafrmm: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesaaduaneira: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nritemdrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtfabricacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlqtdvolume: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlprecomaximo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'poitem'
  });
};
