/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('templatefaturamentoitemitem', {
    idtemplatefaturamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'templatefaturamento',
        key: 'idtemplatefaturamento'
      }
    },
    idtemplatefaturamentoitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iditemfaturamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemdespesa',
        key: 'iditemdespesa'
      }
    },
    tpcalculofaturamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlbasecalculo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmaximo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlminimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idcentroresultado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'centroresultado',
        key: 'idcentroresultado'
      }
    },
    snenviarmanutencaoprocesso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vladicionalcalculo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercentualdesconto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoedaservico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    qtdeservico: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'templatefaturamentoitemitem'
  });
};
