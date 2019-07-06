/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('diadicaoacrescimos', {
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
    iddiadicaoacrescimos: {
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
    tporigemlancamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpformarateio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlacrescimomnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlacrescimomneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snbaseafrmm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snretirarbaseicms: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'diadicaoacrescimos'
  });
};
