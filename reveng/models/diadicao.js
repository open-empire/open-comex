/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('diadicao', {
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
    iddiadicao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nradicao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpacordotarifario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpaplicacaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcondicaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpfabricexpo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcoberturacambial: {
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
    idexportador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idfundamentolegalii: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'fundamentolegalregtrib',
        key: 'idfundamentolegalregtrib'
      }
    },
    idincoterm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'incoterm',
        key: 'idincoterm'
      }
    },
    idlocalembarque: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
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
    idnbm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'nbm',
        key: 'idnbm'
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
    idnaladincca: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'naladincca',
        key: 'idnaladincca'
      }
    },
    tpmetodovaloracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpmodalidadepagtocambio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idmoedamleadicao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    idmotivoadmissaotemporaria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'motivoadmissaotemporaria',
        key: 'idmotivoadmissaotemporaria'
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
    idinstituicaofinanceira: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'instituicaofinanceiraitl',
        key: 'idinstituicaofinanceiraitl'
      }
    },
    idpaisaquisicaoadicao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    idpaisorigemadicao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    idpaisprocedenciaadicao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    tpperiodocambioadicao: {
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
    idtaxajuros: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idacordoaladi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'acordoaladi',
        key: 'idacordoaladi'
      }
    },
    tpvinculacompradorvendedor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snbemencomenda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snipinaotributavel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snjurosate360: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snmaterialusado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snmultimodal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tppagtoparcelascambio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrdoctoreducaoii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nroperacaotratprev: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrrof: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpercreducaoaliqii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlperctaxajuros: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidoadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdeitens: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdeparcelascambiorepasse: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdeperiodocambiorepasse: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdeunidmedestatistica: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    txcompladicao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlacrescimosmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idpessoaagenteimp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    vlperccomissaoagimp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcomissaoagimp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducoesmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesasmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesasmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesasmmerc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretemnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretemneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretedolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmercadoriamcvmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleadicaomnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleadicaodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmercadoriamcvmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroadicaomnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroadicaodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroadicaomneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalfinanciamento360: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreducaoicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicmsdevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicmsrecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleadicaomneg: {
      type: DataTypes.DOUBLE,
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
    vlbasecalculoii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasecalculoipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasecalculoicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrdestaquencm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idcfopadicao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'naturezaoperacao',
        key: 'idnaturezaoperacao'
      }
    },
    vltaxasiscomexadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snalteracaomanualaliqpiscofins: {
      type: DataTypes.STRING,
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
    vlbasecalculopiscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpisrecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsrecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    txobspiscofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliqreduzidaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpreducaoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndadosrepassadoscapa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotaldespesasbaseicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobrutoadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sncalcularfecp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlbasecalculofecp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfecprecolher: {
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
    vlpisdevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsdevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpregimetribpiscofins: {
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
    iddispositivolegalpiscofins: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dispositivolegal',
        key: 'iddispositivolegal'
      }
    },
    nratodrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrexatovinculadoncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrexatovinculadonbm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpatovinculadoncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpatovinculadonbm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idorgaoatovinculadoncm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orgaoemissaoatolegal',
        key: 'idorgaoemissaoatolegal'
      }
    },
    idorgaoatovinculadonbm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orgaoemissaoatolegal',
        key: 'idorgaoemissaoatolegal'
      }
    },
    nratovinculadoncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nratovinculadonbm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    anoatovinculadoncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    anoatovinculadonbm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrexatovinculadoii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpatovinculadoii: {
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
    nratovinculadoii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    anoatovinculadoii: {
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
    nrexatovinculadodumping: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpatovinculadodumping: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idorgaoatovinculadodumping: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orgaoemissaoatolegal',
        key: 'idorgaoemissaoatolegal'
      }
    },
    nratovinculadodumping: {
      type: DataTypes.STRING,
      allowNull: true
    },
    anoatovinculadodumping: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliqii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqacordoii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreduzidaii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrnotacompltipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliqipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreduzidaipi: {
      type: DataTypes.DOUBLE,
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
    vlaliqantidumping: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasecalculoantidumping: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlunidmedidadumping: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idunidmedidadumping: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    vlqtdeunidmedidadumping: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliicalculado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliicalculadoreduzido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliirecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliidevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipirecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipidevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlantidumpingrecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlantidumpingdevido: {
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
    idmoedadesconto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    idmoedafrete: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    idmoedaseguro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    idmetodovaloracaoaduaneira: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'metodovaloracaoaduaneira',
        key: 'idmetodovaloracaoaduaneira'
      }
    },
    vldescontomnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldescontomneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldescontommerc: {
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
    vlpercreducaoaliqipi: {
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
    idfundamentolegalreducaobase: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'fundamlegalredpiscofins',
        key: 'idfundamlegalredpiscofins'
      }
    },
    vlpercreducaobasepiscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqespecificapis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdeunidmedidapis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idunidmedidapis: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    idrecipientepis: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recipiente',
        key: 'idrecipiente'
      }
    },
    vlcapacidaderecipientepis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqespecificacofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdeunidmedidacofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idunidmedidacofins: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    idrecipientecofins: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recipiente',
        key: 'idrecipiente'
      }
    },
    vlcapacidaderecipientecofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmodalidadepagtocambio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modalidadepagamento',
        key: 'idmodalidadepagamento'
      }
    },
    vlrof: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalparcelascambiorepasse: {
      type: DataTypes.DOUBLE,
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
    vlaliqreducaoii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlacrescimosmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducoesmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idprocessoli: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'licapa',
        key: 'idprocesso'
      }
    },
    idlicapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    strnve: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quebraauxiliar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tipocertificado: {
      type: DataTypes.STRING,
      allowNull: true
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
    vlbasecalculoredicms: {
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
    idatovinculadoncm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipoatolegal',
        key: 'idtipoatolegal'
      }
    },
    idatovinculadonbm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipoatolegal',
        key: 'idtipoatolegal'
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
    idatovinculadoipi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipoatolegal',
        key: 'idtipoatolegal'
      }
    },
    idatovinculadodumping: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipoatolegal',
        key: 'idtipoatolegal'
      }
    },
    vlcifmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrregistroli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistroli: {
      type: DataTypes.DATE,
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
    vlaliqicmspiscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmultaii: {
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
    vlfretemcv: {
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
    vlseguroadicaomcv: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrtaxamle: {
      type: DataTypes.DOUBLE,
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
    vlfecpdevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleadicaomnegsfrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleadicaomnacsfrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleadicaodolarsfrete: {
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
    vlaliqicmsauxiliar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpbeneficioicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    complemento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlafrmmicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltxafrmmbanco: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snratearpesoliquidoitens: {
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
    vlpisrecolhervladuaneiro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsrecolhervladuaneiro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpisdevidovladuaneiro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsdevidovladuaneiro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrofpercentual: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercentualcambiorepasse: {
      type: DataTypes.DOUBLE,
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
    vlbaseicmsantecipacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqfatoricmsantecipacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicmsantecipacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqicmsantecipacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlafrmmicmsmanual: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlataaereaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snnaorepassarafrmm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliqbeneficioicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbeneficioicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    semcustosli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idviatransporte: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'viatransporte',
        key: 'idviatransporte'
      }
    },
    idurfentrada: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'urf',
        key: 'idurf'
      }
    },
    vlrtaxaseguro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrtaxafrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrtaxadolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtdeferimento: {
      type: DataTypes.DATE,
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
    snrecorrermultali: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliqcalcmultali: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snnaorepassarataaerea: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlacrescimosbaseicmsmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlacrescimosbaseicmsmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifbaseicmsmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifbaseicmsmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifbaseicmsdolar: {
      type: DataTypes.DOUBLE,
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
    vlaliqespecificacide: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdecide: {
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
    vlsuframacoefnormal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsuframacoefoptante: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpregimetribmultali: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ataaereoisento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snnaorepassartaxasiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpmpfatocopete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlindmistura: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfcv: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpmpf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdpmpf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpmpfatocotepe: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrpesovolumetricoadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducoesfreteprepaidmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducoesfreteprepaidmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducoesoutrosmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducoesoutrosmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'diadicao'
  });
};
