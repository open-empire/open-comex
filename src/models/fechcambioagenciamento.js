/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fechcambioagenciamento', {
    idfechcambioagenciamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrfechcambioagenciamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtaberturacambio: {
      type: DataTypes.DATE,
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
    tpclassificacao: {
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
    idviatransporte: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'viatransporte',
        key: 'idviatransporte'
      }
    },
    idmoedacambio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    idusuariolancamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    idcontafinanceiro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contafinanceiro',
        key: 'idcontafinanceiro'
      }
    },
    idpessoacorretora: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    vltarifabancaria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltarifacorretagem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlretencaoin: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliof: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcambioneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcambionac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxacambio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrcontratocambio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtliquidacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtcancelamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idusuarioliquidacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    idusuariocancelamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ano: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idagentedadosbancarios: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    sncorretagempagto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtvencimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idusuarioaprovacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    dtaprovacaocambio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpformalancamento: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'fechcambioagenciamento'
  });
};
