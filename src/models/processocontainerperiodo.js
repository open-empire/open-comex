/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processocontainerperiodo', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processocontainer',
        key: 'idprocesso'
      }
    },
    idprocessocontainer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessocontainerperiodo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dtinicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dttermino: {
      type: DataTypes.DATE,
      allowNull: true
    },
    qtdediasfreetime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtdedias: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vldiario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxamoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoeda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    tpperiodo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processocontainerperiodo'
  });
};
