/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rodoviaria', {
    idrodoviaria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dtlancamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cddescricaorodoviaria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdescricaorodoviaria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoatransportador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idcidadeorigem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    idcidadedestino: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    idmoeda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    dtvalidadeinicial: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpcarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpmodal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpformacalculo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlvalor: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrazao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlminimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'rodoviaria'
  });
};
