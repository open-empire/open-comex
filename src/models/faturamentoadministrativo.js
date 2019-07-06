/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('faturamentoadministrativo', {
    idfaturamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'faturamento',
        key: 'idfaturamento'
      }
    },
    idfaturamentoadministrativo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iditemdespesa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemdespesa',
        key: 'iditemdespesa'
      }
    },
    vldespesareais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idcontratomanutencao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contratomanutencao',
        key: 'idcontratomanutencao'
      }
    },
    idcontratomanutencaoitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idpedidofinance: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pedidofinanceitem',
        key: 'idpedidofinance'
      }
    },
    idpedidofinanceitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    vlcreditoadministrativo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldebitoadministrativo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsaldoadministrativo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesaadministrativo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'faturamentoadministrativo'
  });
};
