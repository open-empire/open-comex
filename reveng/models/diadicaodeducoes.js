/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('diadicaodeducoes', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'diadicao',
        key: 'idprocesso'
      }
    },
    iddicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddiadicao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddiadicaodeducoes: {
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
    tporigemlancamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpformarateio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vldeducaomnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducaomneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpdeducao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'diadicaodeducoes'
  });
};
