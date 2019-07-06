/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('caixaitem', {
    idcaixa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'caixa',
        key: 'idcaixa'
      }
    },
    idcaixaitem: {
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
    idcontasreceber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contasreceber',
        key: 'idcontasreceber'
      }
    },
    idcontaspagar: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contaspagar',
        key: 'idcontaspagar'
      }
    },
    idcontaspagaritem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idcontacorrenteembarque: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idfechamentocambiotrade: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idfechcambioagenciamento: {
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
    vritem: {
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
    idempresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idfornecedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    }
  }, {
    tableName: 'caixaitem'
  });
};
