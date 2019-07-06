/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidoembarquehedge', {
    idpedidoembarquecapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pedidoembarquecapa',
        key: 'idpedidoembarquecapa'
      }
    },
    idpedidoembarquehedge: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrcontrato: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtoperacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idmoedamercadoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    dtvencimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlmoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    prazo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idcontafinanceiro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contafinanceiro',
        key: 'idcontafinanceiro'
      }
    },
    vlmoedaforward: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlptax: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxadia: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlganhoperda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'pedidoembarquehedge'
  });
};
