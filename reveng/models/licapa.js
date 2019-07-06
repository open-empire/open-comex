/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('licapa', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idlicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nridentusuario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nratodrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrreferenciasiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrcomunicadocompra: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrregistroli: {
      type: DataTypes.STRING,
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
    idacordoaladi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'acordoaladi',
        key: 'idacordoaladi'
      }
    },
    idagenciasecex: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'agenciasecex',
        key: 'idagenciasecex'
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
    idincoterm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'incoterm',
        key: 'idincoterm'
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
    tpcondicaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idurfdespacho: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'urf',
        key: 'idurf'
      }
    },
    idlisubstitutiva: {
      type: DataTypes.INTEGER,
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
    idmoedamle: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    dtprocessoli: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtregistroli: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlqtdediascobertura: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdetotalpesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdemedidaestatistica: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidadetotalcapa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpcambio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpacordo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txinformacaocomplementar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlfreteprepaid: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretecollect: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldesconto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snmontado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tprateiopesoliquido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrateiopesoliquido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrregistrodrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpregime: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalmle: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalmcv: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idfundamentolegalregtrib: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'fundamentolegalregtrib',
        key: 'idfundamentolegalregtrib'
      }
    },
    tpfrete: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlfretenacional: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snfreteembutido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snseguroembutido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoaexportadorcapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    nrprocessoli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dttransmissao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    repassadadositens: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snbaixadaparadi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpprocedenciali: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idgrupoli: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dtvalidade: {
      type: DataTypes.DATE,
      allowNull: true
    },
    classeproduto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    finalidadeimportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    regimedrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    regimeentfracionada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    regimeadmissaotemp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    regimeentreaduana: {
      type: DataTypes.STRING,
      allowNull: true
    },
    regimedefantecip: {
      type: DataTypes.STRING,
      allowNull: true
    },
    procedimento1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    procedimento1a: {
      type: DataTypes.STRING,
      allowNull: true
    },
    procedimento2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    procedimento2a: {
      type: DataTypes.STRING,
      allowNull: true
    },
    procedimento2b: {
      type: DataTypes.STRING,
      allowNull: true
    },
    procedimento2c: {
      type: DataTypes.STRING,
      allowNull: true
    },
    procedimento3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    procedimento4: {
      type: DataTypes.STRING,
      allowNull: true
    },
    procedimento5_1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    procedimento5_2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    procedimento5_3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    procedimento5_4: {
      type: DataTypes.STRING,
      allowNull: true
    },
    procedimento5_5: {
      type: DataTypes.STRING,
      allowNull: true
    },
    procedimento5_6: {
      type: DataTypes.STRING,
      allowNull: true
    },
    procedimento6: {
      type: DataTypes.STRING,
      allowNull: true
    },
    procedimento7: {
      type: DataTypes.STRING,
      allowNull: true
    },
    autembext: {
      type: DataTypes.STRING,
      allowNull: true
    },
    prorrogprazo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cumpexigen: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reqrecfina: {
      type: DataTypes.STRING,
      allowNull: true
    },
    licimportsubs: {
      type: DataTypes.STRING,
      allowNull: true
    },
    deflibsant: {
      type: DataTypes.STRING,
      allowNull: true
    },
    libtermguard: {
      type: DataTypes.STRING,
      allowNull: true
    },
    desinmercimport: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrregistroliant: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcidadeembarquecapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    idrecintoalfandegadocapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recintoalfandegado',
        key: 'idrecintoalfandegado'
      }
    },
    idpessoadespachante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    cdassuntoanvisa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdescricaoassuntoanvisa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idassuntoanvisa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'assuntoanvisa',
        key: 'idassuntoanvisa'
      }
    },
    snretiradamercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdescricaosumaria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmidentveiculotransportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtchegada: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nmdescricaoorgaorequerente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snorgaorequerente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snacompanhamentofiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snlocalizacaocarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrconhecimentomasterli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrconhecimentoli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrcontainer: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrlacre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrpresencacarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmprodutos: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtdeferimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtvalidadeli: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpsituacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtsituacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lisubstitutivo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    motivocancelamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtcancelamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    strnve: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtultimaconsultaorientador: {
      type: DataTypes.DATE,
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
    tppeticaoanvisa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrprocessoanvisa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdfolhasanvisa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nmgerenciaunidadeanvisa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mminformacaocomplementar: {
      type: "OID",
      allowNull: true
    },
    idpessoarepresentante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    sndespachanteeorepresentante: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mminformacaocomplementarorig: {
      type: "OID",
      allowNull: true
    },
    nrtransmissaoli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtprotocolo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    repassadadoscambioitens: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpaplicacaosuframa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpimportacaosuframa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sngerarpli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpenquadramentomaterialusado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpenqoperacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrlotetransmisestrutpropria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snliemexigencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tputilizacaosuframa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrnumeroplisuframa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtvalidadedespacho: {
      type: DataTypes.DATE,
      allowNull: true
    },
    snbloqueada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtrecuperacaoextratoli: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtultimaconsultaanuencia: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtultimaalteracaoautomatica: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpstatus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpaisorigemcapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    tpdeducao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpformarateiodeducao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vldeducao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'licapa'
  });
};
