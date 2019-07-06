/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lsicapa', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idlsicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nridentusuario: {
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
    idacordoaladi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'acordoaladi',
        key: 'idacordoaladi'
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
    idpaisprocedencia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
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
    idpessoarepresentante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
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
    txinformacaocomplementar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snmontado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalmle: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrprocessoli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpimportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpregimetributacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpimportador: {
      type: DataTypes.STRING,
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
    idmotivolsi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'motivodsi',
        key: 'idmotivodsi'
      }
    },
    dttransmissao: {
      type: DataTypes.DATE,
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
    idcidadedesembaraco: {
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
    nmprodutos: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtdeferimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    snmercosul: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtvalidade: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtultimaconsultaorientador: {
      type: DataTypes.DATE,
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
    repassadadositens: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'lsicapa'
  });
};
