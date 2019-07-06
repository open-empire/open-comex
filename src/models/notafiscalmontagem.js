/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notafiscalmontagem', {
    idnotafiscal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdunidadeoperacional: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmunidadeoperacional: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdreferenciaprocesso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpnotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdmodelonotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    notafiscalimpressa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    notafiscalcancelada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrnotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtemissaonotafiscal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrserienotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrnotafiscalfilhote: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpmontagem: {
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
    cdviatransporte: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpremetentedestinatario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdremetentedestinatario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmremetentedestinatario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cnpjremetentedestinatario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cpfremetentedestinatario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    endremetentedestinatario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrendremetentedestinatario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    complremetentedestinatario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bairroremetentedestinatario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cepremetentedestinatario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cidaderemetentedestinatario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    foneremetentedestinatario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ufremetentedestinatario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ieremetentedestinatario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdpaisremetentedestinatario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmpaisremetentedestinatario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    outrodocremetentedestinatario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    freteporconta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdtransportadora: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmtransportadora: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cnpjtransportadora: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cpftransportadora: {
      type: DataTypes.STRING,
      allowNull: true
    },
    endtransportadora: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrenderecotransportadora: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bairrotransportadora: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ceptransportadora: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdcidadetransportadora: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcidadetransportadora: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fonetransportadora: {
      type: DataTypes.STRING,
      allowNull: true
    },
    uftransportadora: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ietransportadora: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdpaistransportadora: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmpaistransportadora: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrplaca: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ufplaca: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cnpjimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cpfimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    endimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrenderecoimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enderecocomplimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bairroimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdpaisimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcidadeimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ufimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    foneimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cepimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ieimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    referenciaimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    outrodocimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrfaturacomercial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numeroregistrodi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrodi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    hrregistro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cpfrespregistro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdtpdeclaracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmtpdeclaracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtretificacaodi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtdesembaraco: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtentradamercadorias: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtsaidamercadorias: {
      type: DataTypes.DATE,
      allowNull: true
    },
    urfentrada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    urfdespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdrecintoalfandegado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmrecintoalfandegado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdpaisorigemmercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmpaisorigemmercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrmaster: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrhouse: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtembarque: {
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
    quantidadevolume: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdvolume: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmvolume: {
      type: DataTypes.STRING,
      allowNull: true
    },
    marcavolume: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numerovolume: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pesoliquidototal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    pesobrutototal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalfrtprepaid: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalfrtcollect: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalfrtternacional: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdmoedafrete: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalfretedolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalfretereais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalseguromoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdmoedaseguro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalsegurodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalseguroreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaldespesasmoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdmoedadespesas: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotaldespesasreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaldespesasdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalmledolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalmlereais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdmoedamle: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalmlddolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalmldmoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalmldreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaltaxasiscomex: {
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
    vltotalpis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalbaseicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliquotabaseicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalicmsrecolhido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxamoedamle: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxamoedafrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxamoedaseguro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxamoedadolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesaaduaneira: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesaacessoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nmnotafiscalvalorextenso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    informacaoextra: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmdadosadicionais: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoaremetentedestinatario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoatransportador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoaunidadeoperacional: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idnaturezaoperacao: {
      type: DataTypes.INTEGER,
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
    tpregistronotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    statusnotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aliquotapis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotacofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotareduzpiscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotareduzicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaldesconto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliquotalucro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdregimetribicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    situacaotributariarepasse: {
      type: DataTypes.STRING,
      allowNull: true
    },
    periodicidadeparcela: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tipoparcela: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdeparcela: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idnotafiscalmae: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    notafiscalcomploucusteiogerado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpvenda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idcidadelocaldesembaraco: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    tpformaemissao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpmodalidadefrete: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrserienotafiscalintegracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdiatapaisremetentedest: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mminformacoesfisco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iesubstitutotributario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cidadeibgeremetentedest: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aliquotamva: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotasubstributaria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmargemlucro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idfaturaexportacaocapa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlmultaretificacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtcancelamentoinutilizacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    motivocancelamentoinutilizacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idusuariocancelinutilizacao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    snenviadoddnfe: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtmontagemnotafiscal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idcidadelocaldestino: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    idcidadelocalembarque: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    tpusofinal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpbeneficioicmscapa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snenviarftp: {
      type: DataTypes.STRING,
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
    snnumeracaointercalada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndespesas: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpregimetribsefazicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txintegracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vldespesascomplementares: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpregimetribpiscofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snenviadoxml: {
      type: DataTypes.STRING,
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
    tplocaldestinooperacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlafrmmicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrbalsa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrvagao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snliberadodespesatrade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cnpjadquirente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ufadquirente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tprateiodespaduaneira: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpindpres: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdufplaca: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmufplaca: {
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
    snconsumidorfinal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalicmsdesonerado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmultacomplemento: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpindpag: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpemis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpimpressao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    apimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrendimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cnaeimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    inscmunicipalimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpindiedest: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ufdesembaraco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpfinnfe: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpnf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmimportadorpais: {
      type: DataTypes.STRING,
      allowNull: true
    },
    justificativa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtjustificativa: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ufibgeimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdcidadeibgeimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nridentestrangeiro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ufsaidapais: {
      type: DataTypes.STRING,
      allowNull: true
    },
    xlocexporta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    xlocdespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmvolumeconsolidado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtdvolumetot: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'notafiscalmontagem'
  });
};
