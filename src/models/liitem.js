/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('liitem', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'licapa',
        key: 'idprocesso'
      }
    },
    idlicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idliitem: {
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
    idmoedamercadoriaitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
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
    nrdestaquencm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlunitarioitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidoitem: {
      type: DataTypes.DOUBLE,
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
    tpfabricanteexportadoritem: {
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
    idpaisorigemitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
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
    vlqtdemedidaestatisticaitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    txmercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlmercadoriaitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlunitariomcvitem: {
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
    vldespesaitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldescontoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idpocapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'poitem',
        key: 'idpocapa'
      }
    },
    idpoitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    nritemli: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlmcvitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nratodrawbackitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrregistrodrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nritemdrawback: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlqtdeitemdrawback: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlemoedaitemdrawback: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    quebraauxiliar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcalculoitem: {
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
    nrpedido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtpedido: {
      type: DataTypes.DATE,
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
    idlocalembarqueitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'terminalcarga',
        key: 'idterminalcarga'
      }
    },
    idcidadeembarqueitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    idpessoarepresentanteitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpedidoimportacaocapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pedidoimportacaoitem',
        key: 'idpedidoimportacaocapa'
      }
    },
    idpedidoimportacaoitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idmoedafreteitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    nrrefdespachanteitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idrecintoalfandegadoitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recintoalfandegado',
        key: 'idrecintoalfandegado'
      }
    },
    vlpercomissaorepresentanteitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoedaseguroitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    snfreteitemembutido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snseguroitemembutido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlfretenacionalitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    estagiofabricacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    temperatura: {
      type: DataTypes.STRING,
      allowNull: true
    },
    umidade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    luminosidade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lote: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idembalagemprimaria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'especiesvolumes',
        key: 'idespeciesvolumes'
      }
    },
    strnve: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlcountitens: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idembalagemsecundaria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'especiesvolumes',
        key: 'idespeciesvolumes'
      }
    },
    formafisica: {
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
    nrordem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    registrominsaude: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrseqinvoiceitem: {
      type: DataTypes.STRING,
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
    vlaliqicms: {
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
    vlaliqii: {
      type: DataTypes.DOUBLE,
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
    idunidademedidaestatistica: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    nrpedidoitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtdvolume: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idvolume: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'especiesvolumes',
        key: 'idespeciesvolumes'
      }
    },
    nmdescricaoprodsigvig: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcfopitem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idmodalidadepagto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modalidadepagamento',
        key: 'idmodalidadepagamento'
      }
    },
    idinstituicaofinanceira: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'instituicaofinanceiraitl',
        key: 'idinstituicaofinanceiraitl'
      }
    },
    idmotivosemcobertura: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'motivosemcobertura',
        key: 'idmotivosemcobertura'
      }
    },
    tpcambioitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtdediascobertura: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    descitemmanualanvisa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlrqtdevolume: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrpesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrconhecimento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrfaturacom: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdprodutosuframa: {
      type: DataTypes.STRING,
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
    nrordemcompra: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtvalidadelote: {
      type: DataTypes.DATE,
      allowNull: true
    },
    txdescanvisa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlmercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlunitmercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrmarcamaterialusado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrmodelomaterialusado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrseriematerialusado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nranofabmaterialusado: {
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
    nrseqpedido: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dtfabricacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlprecomaximo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducaoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'liitem'
  });
};
