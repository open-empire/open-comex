/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwhistoricodi', {
    iddwhistoricodi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrregistrodi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrodi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nradicao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nritem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrregistroli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtdesembaraco: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cnpjcpf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdmoeda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmoeda: {
      type: DataTypes.STRING,
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
    nmdescricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesoliquidoadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtde: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdmcvadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidadecomercializada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtdestatadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidademedidancm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlmcvadicaoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleadicaoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmcvadicaodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleadicaodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteadicaodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteadicaoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroadicaodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroadicaoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesasadicaodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesasadicaoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlacrescimosadicaodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlacrescimosadicaoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducoesadicaodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducoesadicaoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    regimetributacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtrecuperacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlmcvitemunitmoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmcvitemtotalmoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmcvitemunitdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmcvitemtotaldolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snvinculada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aliquotacofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsdevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsrecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliidevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliirecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipidevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipirecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotapis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpisdevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpisrecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbaseii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpdeclaracaocodigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdeclaracaonome: {
      type: DataTypes.STRING,
      allowNull: true
    },
    totaladicoes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    modalidadedespachocodigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    modalidadedespachonome: {
      type: DataTypes.STRING,
      allowNull: true
    },
    operacaofundap: {
      type: DataTypes.STRING,
      allowNull: true
    },
    urfentradacodigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    urfentradanome: {
      type: DataTypes.STRING,
      allowNull: true
    },
    urfdespachocodigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    urfdespachonome: {
      type: DataTypes.STRING,
      allowNull: true
    },
    paisprocedenciacodigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    viatransportecodigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    viatransportenome: {
      type: DataTypes.STRING,
      allowNull: true
    },
    viatransportemultimodal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    viatransportenomeveiculo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    paistransportadorcodigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    paistransportadornome: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nometransportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numeroagente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    conhecimentocargaid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    conhecimentocargaidmaster: {
      type: DataTypes.STRING,
      allowNull: true
    },
    conhecimentocargatipocodigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    conhecimentocargatiponome: {
      type: DataTypes.STRING,
      allowNull: true
    },
    conhecimentocargautilizacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    conhecimentocargautilizacaonm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtconhecimentocargaembarque: {
      type: DataTypes.DATE,
      allowNull: true
    },
    conhecimentocargaembarquelocal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesobruto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtchegada: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpdocumentochegadacarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    documentochegadacarganumero: {
      type: DataTypes.STRING,
      allowNull: true
    },
    armazenamentosetor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fornecedornome: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fornecedorlogradouro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    paisaquisicaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    relacaocompradorvendedor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mercadoriacodigonaladincca: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mercadoriacodigonaladish: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mercadoriaaplicacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    incoterm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    condicaovendalocal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fretemoedanegociadacodigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    seguromoedanegociadacodigo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlseguroreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdcondicaovendametodovaloracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcondicaovendametodovaloracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdiiacordotarifariotipo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmiiacordotarifariotipo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdiiacordotarifarioaladi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmiiacordotarifarioaladi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdiifundamentolegal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdiimotivoadmissaotemporaria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dcrcoeficientereducao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdcambiaiscoberturacambial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcambiaiscoberturacambial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdcambiaisinstituicaofinancia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcambiaisinstituicaofinancia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdcambiaismotivosemcobertura: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcambiaismotivosemcobertura: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdpiscofinsregimetributacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmpiscofinsregimetributacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdpiscofinsfundamentolegalred: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vliialiquotacalculado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliialiquotareduzido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliialiquotarecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipialiquotareduzida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipialiquotarecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdipiregimetributacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmipiregimetributacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpispasepaliquotareduzida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpispasepaliquotarecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsaliquotaadvalorem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpiscofinsbasecalculo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsaliquotareduzida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsaliquotarecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cpfresponsavel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    importadorcpfrepresentante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    importadorenderecobairro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    importadorenderecocep: {
      type: DataTypes.STRING,
      allowNull: true
    },
    importadorenderecologradouro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    importadorenderecomunicipio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    importadorendereconumero: {
      type: DataTypes.STRING,
      allowNull: true
    },
    importadorenderecouf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    importadornomerepresentante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    importadornumerotelefone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    agenciapagamentopis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bancopagamentopis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigoreceitapis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigotipopagamentopis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contapagamentopis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    datapagamentopis: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nometipopagamentopis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valorjurosencargospis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valormultapis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valorreceitapis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    agenciapagamentocofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bancopagamentocofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigoreceitacofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigotipopagamentocofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contapagamentocofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    datapagamentocofins: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nometipopagamentocofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valorjurosencargoscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valormultacofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valorreceitacofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    agenciapagamentotxsis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bancopagamentotxsis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigoreceitatxsis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigotipopagamentotxsis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contapagamentotxsis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    datapagamentotxsis: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nometipopagamentotxsis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valorjurosencargostxsis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valormultatxsis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valorreceitatxsis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    agenciapagamentoii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bancopagamentoii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigoreceitaii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigotipopagamentoii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contapagamentoii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    datapagamentoii: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nometipopagamentoii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valorjurosencargosii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valormultaii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valorreceitaii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    agenciapagamentoipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bancopagamentoipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigoreceitaipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigotipopagamentoipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contapagamentoipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    datapagamentoipi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nometipopagamentoipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valorjurosencargosipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valormultaipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valorreceitaipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    fabricantecidade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fabricantecomplemento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fabricantelogradouro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fabricantenome: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlmcvmoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretemoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguromoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlemoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalitensadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreduzidaii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    importadorenderecocomplemento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fornecedorendereconumero: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fornecedorenderecocomplemento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fornecedorenderecomunicipio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlmledidolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmledireais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlddidolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlddireais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleitemmoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleitemdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleitemreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlditemmoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlditemdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlditemreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteitemdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteitemreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    fornecedorenderecoestado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txresumoinfcompl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcanalselecaoparametrizada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcaracterizacaooperdesctipo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcaracterizacaooperacaonome: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcaracterizacaooperacaonumero: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdtipoembalagem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmembalagem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtdevolumesembalagem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdestatitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobrutoadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobrutoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    numeroretificacaopis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numeroretificacaocofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numeroretificacaotxsis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numeroretificacaoii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numeroretificacaoipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltxsiscomexitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    agenciapagamentoextra1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bancopagamentoextra1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigoreceitaextra1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigotipopagamentoextra1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contapagamentoextra1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    datapagamentoextra1: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nometipopagamentoextra1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valorjurosencargosextra1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valormultaextra1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valorreceitaextra1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    numeroretificacaoextra1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    agenciapagamentoextra2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bancopagamentoextra2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigoreceitaextra2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigotipopagamentoextra2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contapagamentoextra2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    datapagamentoextra2: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nometipopagamentoextra2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valorjurosencargosextra2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valormultaextra2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valorreceitaextra2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    numeroretificacaoextra2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    agenciapagamentoextra3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bancopagamentoextra3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigoreceitaextra3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigotipopagamentoextra3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contapagamentoextra3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    datapagamentoextra3: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nometipopagamentoextra3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valorjurosencargosextra3: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valormultaextra3: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valorreceitaextra3: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    numeroretificacaoextra3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    agenciaicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bancoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigotiporecicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtpagamentoicms: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtregistroicms: {
      type: DataTypes.DATE,
      allowNull: true
    },
    horaregistroicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nometiporecolhimentoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numerosequencialicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    uficms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    paisprocedencianome: {
      type: DataTypes.STRING,
      allowNull: true
    },
    docinstrucaodespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    docinstrucaodespachoextra1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    docinstrucaodespachoextra2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    docnuminstrucaodespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    docnuminstrucaodespachoextra1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    docnuminstrucaodespachoextra2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fretemoedanegociadanome: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlfretecollect: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretenacional: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretetotalmoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretetotalreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsegurototalreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrsequencialretificacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    paisorigemmercadorianome: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlfreteprepaid: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nmsituacaoentregacarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliidevidoadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipidevidoadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpisdevidoadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsdevidoadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbaseiiadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'dwhistoricodi'
  });
};
