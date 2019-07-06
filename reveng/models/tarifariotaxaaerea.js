/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarifariotaxaaerea', {
    idtarifario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tarifario',
        key: 'idtarifario'
      }
    },
    idtarifariotaxaaerea: {
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
    idmoedataxa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    tporigemtaxa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpclassificacaotaxa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpbasecalculo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlinicial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfinal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcustotaxa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlminimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlminimotransportador: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlminimoagente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcustotransportador: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcustoagente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'tarifariotaxaaerea'
  });
};
