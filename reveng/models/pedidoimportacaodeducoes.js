/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidoimportacaodeducoes', {
    idpedidoimportacaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pedidoimportacaocapa',
        key: 'idpedidoimportacaocapa'
      }
    },
    idpedidoimportacaodeducoes: {
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
    tableName: 'pedidoimportacaodeducoes'
  });
};
