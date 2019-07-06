/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proformaexportacaodespesas', {
    idproformaexportacaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'proformaexportacaocapa',
        key: 'idproformaexportacaocapa'
      }
    },
    idproformaexportacaodespesas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iditemdespesa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemdespesa',
        key: 'iditemdespesa'
      }
    },
    sncalcular: {
      type: DataTypes.STRING,
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
    vldespesa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlconvertidodespesa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sndespesaporprocesso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpmetodorateio: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'proformaexportacaodespesas'
  });
};
