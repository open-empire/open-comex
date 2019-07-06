/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('propostadespesas', {
    idproposta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'propostaitem',
        key: 'idproposta'
      }
    },
    idpropostaitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpropostadespesas: {
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
    idmoedadespesa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idmoedataxa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
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
    idmoedaforaregiao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    idmoedaminimo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    idmoedamaximo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    tpdatabase: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlbasetaxa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlfatortaxa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpbasecalculotaxa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlbaseacrescimo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlfatoracrescimo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpbasecalculoacrescimo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlbaseforaregiao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlfatorforaregiao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpbasecalculoforaregiao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlbaseminimo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlfatorminimo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpbasecalculominimo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlbasemaximo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlfatormaximo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpbasecalculomaximo: {
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
    tporigem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdeclarado: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'propostadespesas'
  });
};
