/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processo', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrprocesso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrrefauxiliar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoaunidade: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoaunidadefat: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoacliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoaclientefat: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoaagente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idservico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'servico',
        key: 'idservico'
      }
    },
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    dtabertura: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tprestricao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idliberador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    dtliberacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idcancelador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    dtcancelamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    txresumomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idmoedamle: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    vlrmlemneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrmlemnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoedafrete: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    vlrfreteprepaidmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfretecollectmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfretenacional: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrtaxadolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrtaxafrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrtaxamle: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcifmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcifmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idarmazematracacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'armazem',
        key: 'idarmazem'
      }
    },
    idarmazemdesembaraco: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'armazem',
        key: 'idarmazem'
      }
    },
    idarmazemdta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'armazem',
        key: 'idarmazem'
      }
    },
    idembarcacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'embarcacao',
        key: 'idembarcacao'
      }
    },
    nrnumeroviagem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrconhecimento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrconhecmaster: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idlocalembarque: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'terminalcarga',
        key: 'idterminalcarga'
      }
    },
    idlocaldesembarque: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'terminalcarga',
        key: 'idterminalcarga'
      }
    },
    idcidadeembarque: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    idcidadedesembarque: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    dtconhecimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtdesembaraco: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtembarque: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtprevisaoembarque: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtprevisaoentrega: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtprevisaochegada: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpcanal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idanalistacomissaria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    idanalistacliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    nrpresencacarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtpresencacarga: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrci: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrmanifesto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlrpesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrpesobruto: {
      type: DataTypes.DOUBLE,
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
    tpmicdta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdesembmicdta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpfrete: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrplacaveiculo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoaestrangeira: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    ano: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idpessoaetranspitl: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    vlrqtdevolume: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpcarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    incargaperigosa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    snlimontada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snlirecuperada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpembarquetrade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtchegada: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idmoedaseguro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    vlseguromnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfreteprepaidmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfretecollectmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfretenacionalreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguromneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snrateiocusteio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sneventoconclusorrealizado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dteventoconclusorrealizado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrprazoconclusaoprevisto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ideventoconclusor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlrtaxaseguro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrcifdolar: {
      type: DataTypes.DOUBLE,
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
    tpproduto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlrmlemdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfreteprepaiddolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfretecollectdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfretenacionaldolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsegurodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfreteinternacionalmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valorsda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlassistenciasocial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtbasesda: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpstatussda: {
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
    idgatewayexterior: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'terminalcarga',
        key: 'idterminalcarga'
      }
    },
    idgatewaybrasil: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'terminalcarga',
        key: 'idterminalcarga'
      }
    },
    tpestufagem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sntarifaminima: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlrfretetotalmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrpesovolumetrico: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrpesotaxado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrtarifafrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfreteinternacionalmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idcomercial: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'comercialrota',
        key: 'idcomercial'
      }
    },
    idcomercialservico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idcomercialrota: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idpessoaparceiro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idcomissaria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    sneventoconclusmantrarealizado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    observacaosda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoaetransprodov: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    vlotherchargevenda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlotherchargevendacc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlotherchargevendapp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlhousevenda: {
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
    nomedofiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    situacaodespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    etapadespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idultimoeventorealizado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'eventos',
        key: 'idevento'
      }
    },
    dtultimoeventorealizado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    observacaocomercial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    observacaogeral: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpembarqueagenciamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    observacaoultimofollowup: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snetiqueta: {
      type: DataTypes.STRING,
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
    nrdta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpformacomercializacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlrmlemnegsfrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrmlemnacsfrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrmledolarsfrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtalteracaoflw: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idpessoaimportacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoaarmador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoaexportador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    nrbooking: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idprocessovinculado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    snenviar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmintegracao: {
      type: "OID",
      allowNull: true
    },
    shipmentrefid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrregistrocehouse: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrocehouse: {
      type: DataTypes.DATE,
      allowNull: true
    },
    courier: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrexportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrcertificadoda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtconversaoinstrucaoembarque: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlrtarifafretecompra: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtdeadlinedocts: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtdeadlinecarga: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrpastafisicaarquivamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snenviadobysisco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtkeeponholduntil: {
      type: DataTypes.DATE,
      allowNull: true
    },
    snpermitirgerarli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    chaveedi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtexportacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtrecebimentonum: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtliquidacaofat: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtfaturamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtfechamentocambio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    snlicalculada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoatransportadordta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    tpintegradodta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    observacaogeralflw: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bloqueardesbloquearcc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtentrega: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dteventofat: {
      type: DataTypes.DATE,
      allowNull: true
    },
    snconsultadosiscarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idarquivamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'arquivamentoprocesso',
        key: 'idarquivamento'
      }
    },
    dtarquivamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ideventoconclusorfinanceiro: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdprocessointegracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtultimaalteracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    notafiscalsaida: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpnegociacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtnotafiscalsaida: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtnecessidadefabr: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpdivisaoprofit: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vldivisaoprofit: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sntarifaminimacompra: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtliberacaofaturamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sneventoconclusorfinanceiro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    observacaogeralflw1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlrfretemneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfretemnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfretedolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxacomercial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idpessoaunidadeemissora: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    valorcalcsobrealiqsda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idpessoadespachanteregistro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    dtdeadlineliberacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtliberacaomerc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtaverbacaodde: {
      type: DataTypes.DATE,
      allowNull: true
    },
    snfaturamentolote: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdearquivos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdprocauxintegracao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    observacaogeralflw2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcanaldta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpoperacaodta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpoperacaodesembaraco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    observacaogeral1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpmovimentowin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snanalistaobrigatorio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idanalistaprotocolo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    idcontatoprotocolo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idpessoaservico: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpindicadorfaturamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    diamaximofaturamento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idultimoeventorealizaiportal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'eventos',
        key: 'idevento'
      }
    },
    dtultimoeventorealizaiportal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    observacaoultimofollowiportal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    executadopeloparceiro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtenviadonovomantra: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'processo'
  });
};
