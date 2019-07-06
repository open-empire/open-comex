/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cotacaodeducoes', {
    idcotacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'cotacao',
        key: 'idcotacao'
      }
    },
    idcotacaodeducoes: {
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
    }
  }, {
    tableName: 'cotacaodeducoes'
  });
};
