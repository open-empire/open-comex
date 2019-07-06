/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dideducoes', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dicapa',
        key: 'idprocesso'
      }
    },
    iddicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddideducoes: {
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
    tpformarateio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdeducao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'dideducoes'
  });
};
