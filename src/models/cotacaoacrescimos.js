/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cotacaoacrescimos', {
    idcotacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'cotacao',
        key: 'idcotacao'
      }
    },
    idcotacaoacrescimos: {
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
    }
  }, {
    tableName: 'cotacaoacrescimos'
  });
};
