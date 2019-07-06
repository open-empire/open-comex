/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contasreceberitem', {
    idcontasreceber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'contasreceber',
        key: 'idcontasreceber'
      }
    },
    idcontasreceberitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'numerarioitem',
        key: 'idprocesso'
      }
    },
    iditem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemdespesa',
        key: 'iditemdespesa'
      }
    },
    vlritem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idprecusto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pedidoembarquecusteio',
        key: 'idpedidoembarquecapa'
      }
    },
    idprecustoitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idfaturamento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idnumerario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idnumerarioitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idnotafiscalmontagem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlrlancamento: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlitembaixado: {
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
    }
  }, {
    tableName: 'contasreceberitem'
  });
};
