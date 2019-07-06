/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dicapa', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    iddicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nridentificacaousuario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpaplicacaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcoberturacambial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpimportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoaadquirente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    nrdestaquencm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpformapagamento: {
      type: DataTypes.STRING,
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
    idmetodovaloracao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'metodovaloracaoaduaneira',
        key: 'idmetodovaloracaoaduaneira'
      }
    },
    tpmodalidadedespacho: {
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
    idmotivosemcobertura: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'motivosemcobertura',
        key: 'idmotivosemcobertura'
      }
    },
    idpaisprocedencia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    idrecintoalfandegado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recintoalfandegado',
        key: 'idrecintoalfandegado'
      }
    },
    tpregimetributacaoiirepasse: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpregimetributacaoipirepasse: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idsetorarmazem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'setorimportacao',
        key: 'idsetorimportacao'
      }
    },
    tpcontratacaooperacaocambial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdocumentocarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdeclaracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpmanifesto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idurfentrada: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'urf',
        key: 'idurf'
      }
    },
    idurfdespacho: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'urf',
        key: 'idurf'
      }
    },
    tputilizacaocarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpvinculacompradorvendedor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrodi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dttransmissaodi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    snmoedanacional: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snmoedaunica: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snmultimodal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snoperacaofundap: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snratearfreteitens: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snratearseguroitens: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassadodadosadicao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassadodadoscambio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snmultaiirepasse: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrbancocomissao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrbancopagamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrcompradorme: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrcontratocambio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrprotocoloimportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrdeclaracaoimportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nridentificacaocomissao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrpracacomissao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrpracapagtocambio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrrof: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlrof: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlperccomissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqicmsrepasse: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercreducaoicmsrepasse: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdeadicoes: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    txcomplementarmanual: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txcomplementarautomatico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmcomplementarmanual: {
      type: "OID",
      allowNull: true
    },
    mmcomplementarautomatico: {
      type: "OID",
      allowNull: true
    },
    vltotaldespesamnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaldespesamneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaldespesammerc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaldespesadolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoedadespesa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    vlpercseguromle: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalantidump: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtultalteracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpbaseseguro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpformaseguro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalbaseicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalbasereducaoicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrcontapagtotributos: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrbancotributos: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nragenciatributos: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpimpressaoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snimpressaoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtimpressaoicms: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vltotalacrescimosmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaldeducoesmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idinstituicaofinanceira: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'instituicaofinanceiraitl',
        key: 'idinstituicaofinanceiraitl'
      }
    },
    nrseqretificacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpmotivoretificacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtretificacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpregimetributacaoicms: {
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
    vltotalcambio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpfabricexpo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoaexportadorrepasse: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoafabricanterepasse: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpaisaquisicaorepasse: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    idpaisorigemrepasse: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    vlqtdeparcelascambiorepasse: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdeperiodocambiorepasse: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpperiodocambiorepasse: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snfreteembutidoitens: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snseguroembutidoitens: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalacrescimosmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaldeducoesmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrprocessosiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tppagtoparcelascambiorepasse: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpercreducaoiirepasse: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sngerarpliquidodopesobruto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpercpesobrutopesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snrateiopesoliquido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tprateiopesoliquido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sntrazerpiscofinstxcompl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcontrolecfop: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalpiscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalpis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotacofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalbasepiscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaltxsiscomex: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaldescontomneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaldescontomnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaldescontommerc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaldescontodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoedadesconto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    tpregimetributacaopiscofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idfundamentolegalpiscofins: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'fundamlegalregtribpiscofins',
        key: 'idfundamlegalregtribpiscofins'
      }
    },
    vlaliqreducaopisrepasse: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreducaocofinsrepasse: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqpisrepasse: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqcofinsrepasse: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasefecp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalfecp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqfecp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpcalculofecp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcfoprepasse: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'naturezaoperacao',
        key: 'idnaturezaoperacao'
      }
    },
    snicmsipisuspensorepasse: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snicmssuspensopisrepasse: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdepermanenciarepasse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtdevidautilrepasse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    snicmsproporcionalpermanencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtprocessodi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrembarcacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcondicaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idtextopadrao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'textopadrao',
        key: 'idtextopadrao'
      }
    },
    vldespesasaduaneiras: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snpiscofinsvalorintegralicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snreimportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpparcelacambiorepasse: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sncalculado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpaisbandeira: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    dtcalculo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    snicmsonlineprocessado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snbaixatotalentreposto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtvencimentoda: {
      type: DataTypes.DATE,
      allowNull: true
    },
    snliberadofinanceiro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtliberacaofinanceiro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idusuarioliberacaofinanceiro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    sntransporteportaporta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoatransportrodoviario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    nridentificacaoagente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bancocomissaoagente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    agenciacomissaoagente: {
      type: DataTypes.STRING,
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
    vltotalparcelascambiorepasse: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idcidadelocaldesembaraco: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    nridsiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtenviadointegracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idlocalincoterm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    vlaliqicmspiscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtatualizacaomantra: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpbeneficioicms: {
      type: DataTypes.STRING,
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
    idtaxajurosbacen: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'taxajurosbacen',
        key: 'idtaxajurosbacen'
      }
    },
    vltaxajuroscambio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idpessoaagenteitl: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    tpformarateiodespesa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpformarateiodesconto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndiferencabasefecp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpercentualfecp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sncalcularfecp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snenviarftp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpontoestoque: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pontoestoque',
        key: 'idpontoestoque'
      }
    },
    idpessoagarantidor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    tppagamentogarantia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrcontratoconcessao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpprocedencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iduffavorecidodmi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'uf',
        key: 'iduf'
      }
    },
    tplocaldesembaracodmi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpunidademedidapesodmi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpsuspensaodmi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpprazorecolhimentodmi: {
      type: DataTypes.STRING,
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
    especificaomercadoriadmi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    especificaolegislacaodmi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numerosupensaodmi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlricmssubtstsupensoreaisdmi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlricmssupensoreaisdmi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dttransmissaoweb: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlafrmmicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalicmssubstrib: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalbaseicmssubstrib: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalpisvladuaneiro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcofinsvladuaneiro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snpiscofinsvaloraduaneiro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idusuariotransmissaodi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtdealertas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtdeerros: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    txalertas: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txerros: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snanalisado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcontapgtoimpostos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contafinanceiro',
        key: 'idcontafinanceiro'
      }
    },
    snafrmmbaseicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idusuarioultaltdi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    vltotaicmsantecipacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tprestricao1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tprestricao2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlataaereaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snaatareabaseicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    statussiscoweb: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtstatussiscoweb: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pathfileretornosiscoweb: {
      type: DataTypes.STRING,
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
    dtrecuperacaoextratoci: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlrcifbaseicmsmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcifbaseicmsmnac: {
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
    snbloqueada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtrecuperacaoextratodi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vltotdeducoesfreteprepaidmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotdeducoesfreteprepaidmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaldeducoesoutrosmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaldeducoesoutrosmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'dicapa'
  });
};
