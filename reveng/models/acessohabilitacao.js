/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acessohabilitacao', {
    idacessohabilitacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpessoacliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoaunidadeoper: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
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
    idmodelonf: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelonf',
        key: 'idmodelonf'
      }
    },
    tpservico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    inirrfminimo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    incpmffaturamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpirrffaturamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snintresoitoumfaturamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpnotafiscalservico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcontafaturamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contafinanceiro',
        key: 'idcontafinanceiro'
      }
    },
    idcontanumerario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contafinanceiro',
        key: 'idcontafinanceiro'
      }
    },
    qtdediasvencimentofat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtdediasvencimentonum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    invencimentodiasuteis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    incpmfsaldocredor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    incobrarcpmf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpintresoitoumfatura: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snissrecuperar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sninssrecuperar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snpisrecuperar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sncofinsrecuperar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliqissrecuperar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqinssrecuperar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqpisrecuperar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqcofinsrecuperar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snisssubstitutivo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtprocuracaoradar: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtcontrolevenctoradar: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtoutorga: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrsiprimex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtvenctoafrmm: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlprotecaocambialaereo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlprotecaocambialmaritimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtvenctomapa: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtvenctoanvisa: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtvenctoreceitafederal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    snirrfsobreiss: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idmodelocalculotrade: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modelocalculotrade',
        key: 'idmodelocalculotrade'
      }
    },
    snirrfsobretotalreceita: {
      type: DataTypes.STRING,
      allowNull: true
    },
    issminimo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idtabelasda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tabelasda',
        key: 'idtabelasda'
      }
    },
    sniof: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idusuariosuper: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    iddadoscomplementarestrade: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dadoscomplementares',
        key: 'iddadoscomplementares'
      }
    },
    snexibirdespcliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sncontagrafica: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snfaturamentolote: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpformafaturamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliqirrfdiferenciada: {
      type: DataTypes.DOUBLE,
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
    snfaturaremlote: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'acessohabilitacao'
  });
};
