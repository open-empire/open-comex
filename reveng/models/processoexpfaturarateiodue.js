/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexpfaturarateiodue', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processoexportacao',
        key: 'idprocesso'
      }
    },
    idprocessoexportacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexpfaturarateiodue: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrfatura: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlfrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlacrescimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'processoexpfaturarateiodue'
  });
};
