/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pagamentoitemembarque', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idpagamentoitemembarque: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iditem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemdespesa',
        key: 'iditemdespesa'
      }
    },
    vritem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtpagamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtsolicitacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtmontagem: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtcancelamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idempresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'favorecidocontacorrente',
        key: 'idpessoa'
      }
    },
    idusuariosolic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    idusuariomonta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    idusuariocanc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    dtvencimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idmoedacompra: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlcompra: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    insolicitado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrdoctoitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrfatura: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpstatus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idccfornecedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idliberacaopagamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'liberacaopagamento',
        key: 'idliberacaopagamento'
      }
    },
    idusuariopagamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    vlnumerario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idusuarioliberacaopagamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    dtliberacaopagamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    snperda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idprocessocontainer: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpenviocontaspagar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlrtaxa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snpagamentoadiantado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idnumerario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idnumerarioitem: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'pagamentoitemembarque'
  });
};
