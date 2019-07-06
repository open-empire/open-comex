/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pessoaservico', {
    idpessoaservico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idacessohabilitacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'acessohabilitacao',
        key: 'idacessohabilitacao'
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
    idpessoaunidadefat: {
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
    dtprocuracao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrproposta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtvalidadeproposta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtcaptacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    qtdediasvencimentonum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    incpmfnumerario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcontaimpostos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contafinanceiro',
        key: 'idcontafinanceiro'
      }
    },
    idcontadespesas: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contafinanceiro',
        key: 'idcontafinanceiro'
      }
    },
    idtabelasda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tabelasda',
        key: 'idtabelasda'
      }
    },
    snconsultamantra: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iddadoscomplementares: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dadoscomplementares',
        key: 'iddadoscomplementares'
      }
    },
    tptaxanotfat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idintervalocif: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'intervalocif',
        key: 'idintervalocif'
      }
    },
    qtdediasfreetimearmazemag: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    snconsultasiscarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idtemplatefaturamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'templatefaturamento',
        key: 'idtemplatefaturamento'
      }
    },
    idtemplatenumerario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'templatenumerario',
        key: 'idtemplatenumerario'
      }
    },
    nmtituloservicohabilitacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmtitulopesquisa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdtitulopesquisa: {
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
    idcontatocliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoacontato',
        key: 'idpessoa'
      }
    },
    idcontatoprotocolo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    vldescontodespachante: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tptemplateexportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcriteriogeracaoruc: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'pessoaservico'
  });
};
