/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('direpasse', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddirepasse: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    adicaoinicial: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    adicaofinal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpfabricexpo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoaexportador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoafabricante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
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
    tpaplicacaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcondicaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpvinculacompradorvendedor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idmetodovaloracao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'metodovaloracaoaduaneira',
        key: 'idmetodovaloracaoaduaneira'
      }
    },
    idcfop: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'naturezaoperacao',
        key: 'idnaturezaoperacao'
      }
    },
    vlaliqicmspiscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpregimetributacaoii: {
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
    tpacordotarifario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrexatovinculadoii: {
      type: DataTypes.STRING,
      allowNull: true
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
    idacordoaladi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'acordoaladi',
        key: 'idacordoaladi'
      }
    },
    vlaliqacordoii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreducaoii: {
      type: DataTypes.DOUBLE,
      allowNull: true
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
    idatovinculadoipi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipoatolegal',
        key: 'idtipoatolegal'
      }
    },
    idorgaoatovinculadoii: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orgaoemissaoatolegal',
        key: 'idorgaoemissaoatolegal'
      }
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
    vlaliqreduzidaipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercreducaoaliqipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpregimetributacaoicms: {
      type: DataTypes.STRING,
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
    idfundamentolegalicms: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dispositivolegal',
        key: 'iddispositivolegal'
      }
    },
    idfundamentoespecificoicms: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'fundamentoespecificoicms',
        key: 'idfundamentoespecificoicms'
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
    idmodalidadepagtocambio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modalidadepagamento',
        key: 'idmodalidadepagamento'
      }
    },
    vlaliqpis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqcofins: {
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
    snrepassafabriexport: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sncalcularfecp: {
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
    snrepassacalcularfecp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassadiferencabasefecp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassavlpercentualfecp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaaplicacaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassavinccompradorvendedor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassacfop: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassadestaquencm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassacondmercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassametodovladuaneiro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaaliqicmspiscofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaregtribii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaacordotarifario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassatipoii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassanumeroanoii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassareducaoii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaipinaotributavel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaregimetributacaoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaacordoaladi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaregimeipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaexipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassapercreducaoaliqipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassapercicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassadispositivolegal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaregimepiscofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaaliquotapis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaaliquotacofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassafundamentolegalii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaexii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepasseicmsproppermanencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snicmsproporcionalpermanencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaorgaoemissorii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaorgaoemissoripi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaaliquotaacordoaladi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassanotacomplementartipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassatipoipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassanumeroanoipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaaliqreduzidaipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaaliquotareducaoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassafundamentoespecifico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassafundlegalpiscofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaaliquotareducaopis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaaliquotareducaocofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snpiscofinsvalorintegralicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snmultasobreii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snicmscomipisuspenso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snreimportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassamultasobreii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaicmscomipisuspenso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassapiscofinsvlintegricms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassareimportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassapermanencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassadespesasaduaneiras: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassadadoscambio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassabeneficioicms: {
      type: DataTypes.STRING,
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
    qtdepermanencia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vldespesasaduaneiras: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpbeneficioicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcoberturacambial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    percentualcomissao: {
      type: DataTypes.DOUBLE,
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
    idmotivosemcobertura: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'motivosemcobertura',
        key: 'idmotivosemcobertura'
      }
    },
    idtaxajuros: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'taxajurosbacen',
        key: 'idtaxajurosbacen'
      }
    },
    tppagtoparcelascambio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltaxajuroscambio: {
      type: DataTypes.DOUBLE,
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
    idpontoestoque: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pontoestoque',
        key: 'idpontoestoque'
      }
    },
    idgarantidor: {
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
    tpperiodocambioadicao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtdeparcelascambio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdeperiodocambio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalparcelascambio: {
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
    snrepassaarea: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassafabricante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassapaisaquisicao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassapaisorigem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassamotivoadtemporario: {
      type: DataTypes.STRING,
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
    snrepassavlafrmmicms: {
      type: DataTypes.STRING,
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
    snrepassapercmva: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassapercsubstributaria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlrofpercentual: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercentualcambio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlafrmmicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercfatoricmsantecipacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercicmsantecipacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snrepassapercfatoricmsanteci: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassapercicmsantecipacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassavlaliqreduzidaii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliqreduzidaii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqbeneficioicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snrepassaaliqbeneficioicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaataaereaicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaataaereaicms: {
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
    vlqtdecide: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqespecificacide: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snrepassavlqtdecide: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassavlaliqespecificacide: {
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
    snrepassasuframacodtributacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassadocumentovinculado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaincoterm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassalocalincoterm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idincoterm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'incoterm',
        key: 'idincoterm'
      }
    },
    idlocalincoterm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    tpreducaoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassareducaoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpregimeadicionalfrete: {
      type: DataTypes.STRING,
      allowNull: true
    },
    darjjustificativa: {
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
    snrepassapmpfatocopete: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaindmistura: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassafcv: {
      type: DataTypes.STRING,
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
    idorgaoatovinculadoncm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orgaoemissaoatolegal',
        key: 'idorgaoemissaoatolegal'
      }
    },
    snrepassatiponcm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrexatovinculadoncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaexncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nratovinculadoncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    anoatovinculadoncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassaorgaoemissorncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrepassanumeroanoncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpmpfatocotepe: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snrepassapmpfatocotepe: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'direpasse'
  });
};
