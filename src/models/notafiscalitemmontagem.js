/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notafiscalitemmontagem', {
    idnotafiscal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'notafiscalmontagem',
        key: 'idnotafiscal'
      }
    },
    idnotaficalitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nritemnotafiscal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrdiitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrdiadicao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    itemvirtual: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ordemcompra: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrfatura: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrfaturaitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdnaturezaoperacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmnaturezaoperacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdincoterm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrlicencaimportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdmercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtdmercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmargemlucro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasenotafiscalsaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdunidademedida: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmunidademedida: {
      type: DataTypes.STRING,
      allowNull: true
    },
    siglaunidademedida: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlunitariomcvmoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlunitariomlemoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlunitarioreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    flagtprateiopeso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nmunidademedidapesoliquido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesobruto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nmunidademedidapesobruto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdprodutosecundario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmdescricaoproduto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpregimeii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmregimeii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdfundamentolegalii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmfundamentolegalii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aliquotanormalii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotareducaoii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaacordoii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliidevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliiacordo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliirecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpregimeipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmregimeipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ipiespecifico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aliquotanormalipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotareducaoipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaacordoipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipidevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipiacordo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipirecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlantidumping: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpacordotarifario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cddispositivolegal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdregimetribicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aliquotaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotareducaoicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasenormalicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasereduzidaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicmsrecolhido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmultaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpregimetribpiscofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    flagpissobreipiintegral: {
      type: DataTypes.STRING,
      allowNull: true
    },
    flagpissobreiiintegral: {
      type: DataTypes.STRING,
      allowNull: true
    },
    flagpissobreicmsintegral: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlbasecalculopiscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotareducaopiscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotapis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpisrecolhido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpisadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotacofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsrecolhido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdfabricante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmfabricante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cnpjfabricante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cpffabricante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iefabricante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    endfabricante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    complendfabricante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrfabricante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bairrofabricante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cepfabricante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cidadefabricante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fonefabricante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    uffabricante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ufsiglafabricante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdpaisfabricante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmpaisfabricante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cnpjexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cpfexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ieexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    endexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    complendexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bairroexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cepexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cidadeexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    foneexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ufexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ufsiglaexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdpaisexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmpaisexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlfobreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldescontomn: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmcvmn: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfrtreaiscollect: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfrtreaisprepaid: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfrtreaisternac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfrttotalreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlacrescimosreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducoesreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesasacessorias: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesasaduaneiras: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxasiscomex: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmulta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdebaixadafilhote: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdeabaixarfilhote: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfrtccrateadomle: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfrtpprateadomle: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfrttnrateadomle: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfrttotalrateadomle: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdonu: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdclasseonu: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmtextoonu: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmcompldescricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmdadosimpresso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoafabricante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
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
    idnaturezaoperacao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idmercadoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    cdmoedanegociada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmoedanegociada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltaxamoedanegociada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidoadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliidevidoadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliiacordoadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliirecolheradicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipidevidoadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipiacordoadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipirecolheradicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlantidumpingadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfobreaisadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldescontomnadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmcvmnadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroreaisadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfrttotalreaisadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlacrescimoreaisadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducoesreaisadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesasaduaneirasadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifreaisadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    grupodequebra: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idformularionf: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'formularionf',
        key: 'idformularionf'
      }
    },
    idcontinuacaoformularionf: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    nrsequenciaitemnoformulario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    legendaclassificacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    legendasituacaotributaria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlbasecalculoiiadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasecalculoipiadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasecalculoantdupingadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmcvreaisadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmcvmoedaadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    entradaestoque: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliquotalucrosaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotamva: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliquotaicmsbasesaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotasubstributaria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasesubstributaria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsubstributaria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qdsaldobaixadocompraordem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idnotafiscalentrada: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idnotaficalitementrada: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nfevalorfrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfevalorseguro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfevalorii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfevaloripi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfevalorbaseicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfevaloricms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfevalorpis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfevalorcofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfevalortotalprodutos: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfevalordespesasacessorias: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfevalordespesasaduaneiras: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfevalortaxasiscomex: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfevaloraliquotaii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfevaloraliquotaipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfevaloraliquotaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfevaloraliquotapis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfevaloraliquotacofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfevalormle: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mmdespesascusteio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdunidademedidaipiespecifico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmunidademedidaipiespecifico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdrecipienteipiespecifico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmrecipienteipiespecifico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtdeunidmedidaipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlunidmedidaipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqespecificapis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqespecificacofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcapacidaderecipiente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalnota: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpvenda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlbasecalculoipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    csticms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cstipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cstpiscofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlmultaadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    codigogtin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    unidadetributavelgtin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrcontroleaverage: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrinvoiceitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrseqinvoiceitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliqicmspiscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snicmsproporcionalpermanencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fatorpermanencia: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrpedido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nfevlbasesubstributaria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfevlsubstributaria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfealiquotasubstributaria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfealiquotamva: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpusofinal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nfevaloraliquotaicmspiscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpcalculoespecial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nfeformaimportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpbeneficioicmsitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdarea: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpreducaoicms: {
      type: DataTypes.STRING,
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
    cdselo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    classeenquadramento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrenquadramento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtdeselocontrole: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    aliquotairrf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotacsll: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcomissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdeunidmedidapis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdeunidmedidacofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlereais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleunitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesascomplementares: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrseqpedido: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tporigemmercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ufsiglaicmsstoperacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aliquotabaseoperacaopropria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltributosestfedmun: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valorbasexpiscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mmcompldescricaoproduto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nfevlqtdmercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfevlunitarioreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tplocaldestinooperacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlafrmmicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snafrmmbaseicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nfevalorafrmm: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    outrodocumento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nratodrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliqbeneficioicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlataaerea: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snaatareabaseicms: {
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
    snmultalinoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlacrescimosbaseicmsreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifbaseicmsreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrecolhercide: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfealiquotareducaoipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfealiquotareducaoicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfealiquotareducaoii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfevlcifreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfevlafrmmicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfevlataaerea: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfrttotalreaisratpesoliq: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlacrreaisratpesoliq: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrcest: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlafrmmicmsrateiocif: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltxsiscomexrateiocif: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespadrateiocif: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbcicmsufdest: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliqicmsinternauf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpaliqinterestadualicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tppercentualpartilhaicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlicmsufdest: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicmsufrem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesasaduaneirasdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    motdesicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlicmsdesonerado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmultacomplementoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    infadprod: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpmodbcst: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpmodbc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    emailexportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdcest: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlbasecalculoantidumping: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqdtunidmedidadumping: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqantidumping: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlunidmedidadumping: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    siglaunidademedidancm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtdeunidestatisticancm: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlunitariotributado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtddecimalvlunitario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sncidebaseicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlrecolhercidebaseicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfevalorcide: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nfevlrecolhercidebaseicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfecpitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicmsdevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercdiferimentoicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicmsdiferido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'notafiscalitemmontagem'
  });
};
