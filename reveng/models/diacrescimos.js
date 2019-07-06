/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('diacrescimos', {
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
    iddiacrescimos: {
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
    tpformarateio: {
      type: DataTypes.STRING,
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
    tableName: 'diacrescimos'
  });
};
