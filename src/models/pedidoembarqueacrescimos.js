/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidoembarqueacrescimos', {
    idpedidoembarquecapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pedidoembarquecapa',
        key: 'idpedidoembarquecapa'
      }
    },
    idpedidoembarqueacrescimos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idtipoacrescimo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipoacrescimo',
        key: 'idtipoacrescimo'
      }
    },
    idmoedaacrescimo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    vlacrescimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpformarateioacrescimos: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'pedidoembarqueacrescimos'
  });
};
