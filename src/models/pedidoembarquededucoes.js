/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidoembarquededucoes', {
    idpedidoembarquecapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pedidoembarquecapa',
        key: 'idpedidoembarquecapa'
      }
    },
    idpedidoembarquededucoes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idtipodeducao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipodeducao',
        key: 'idtipodeducao'
      }
    },
    idmoedadeducao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    vldeducao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpformarateiodeducoes: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'pedidoembarquededucoes'
  });
};
