/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contaspagaritem', {
    idcontaspagar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'contaspagar',
        key: 'idcontaspagar'
      }
    },
    idcontaspagaritem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iditem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemdespesa',
        key: 'iditemdespesa'
      }
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idpagamentoitemembarque: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vrlancamento: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idcentrocusto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'centrocusto',
        key: 'idcentrocusto'
      }
    },
    idcalculocomissao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idfaturamento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idfilial: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idfaturamentoprocvinculado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idprocessovinculado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlitembaixado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtimpressao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idusuarioimpressao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    vrintegracao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'contaspagaritem'
  });
};
