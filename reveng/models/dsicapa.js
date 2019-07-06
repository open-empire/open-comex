/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dsicapa', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    iddsicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dtregistro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrregistro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sncorreio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idempresadeclarante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idlocaldesembaraco: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    sntransmissao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sngerapesoliquido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpercgerapesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idrecintoalfandegado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recintoalfandegado',
        key: 'idrecintoalfandegado'
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
    idpaisprocedencia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    idsetorimportacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'setorimportacao',
        key: 'idsetorimportacao'
      }
    },
    tpdoctocarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrprocessosiscomex: {
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
    nrcontacorrentetributos: {
      type: DataTypes.STRING,
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
    vltotalicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mmcomplementaresmanual: {
      type: "OID",
      allowNull: true
    },
    mmcomplementaresautomatica: {
      type: "OID",
      allowNull: true
    },
    dtcalculo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dttransmissao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idusuariocalculo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    idusuariotransmissao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    snfreteembutido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snicmsonlineprocessado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcalculoseguro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpbasecalculoseguro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpercseguro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snseguroembutido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idnotafiscal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'notafiscalmontagem',
        key: 'idnotafiscal'
      }
    },
    tpimportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalbaseicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idcidadelocaldesembaraco: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dttransmissaodsi: {
      type: DataTypes.DATE,
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
    idurfentrada: {
      type: DataTypes.INTEGER,
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
    sncalculado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpimportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtemissaodse: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrdde: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrprocessoexp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idurfdse: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'urf',
        key: 'idurf'
      }
    },
    nrdse: {
      type: DataTypes.STRING,
      allowNull: true
    },
    passaportecarteira: {
      type: DataTypes.STRING,
      allowNull: true
    },
    naturezavisto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nacionalidade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numeroregistro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    transportador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    depositarioarmazem: {
      type: DataTypes.STRING,
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
    nridentificacaoveiculo: {
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
    }
  }, {
    tableName: 'dsicapa'
  });
};
