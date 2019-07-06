/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comercialtaxasfretefcl', {
    idcomercial: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'comercialrota',
        key: 'idcomercial'
      }
    },
    idcomercialservico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcomercialrota: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcomercialtaxasfretefcl: {
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
    sndeclarado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snprofit: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tptaxa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcobranca: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tporigemtaxa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpbasecalculo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlintervaloinicial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlintervalofinal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoedacompra: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    vlbasecompra: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcompraminimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoedavenda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    vlbasevenda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlvendaminimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpclassificacaotaxa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpprocedencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlcompra: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlvenda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcompramoedafrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlvendamoedafrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcomprareais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlvendareais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    txtobservacaotaxas: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'comercialtaxasfretefcl'
  });
};
