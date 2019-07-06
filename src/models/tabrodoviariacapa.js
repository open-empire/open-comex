/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tabrodoviariacapa', {
    idtabrodoviariacapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dtlancamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cdtabrodoviariacapa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdescricao: {
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
    idlocalorigem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'terminalcarga',
        key: 'idterminalcarga'
      }
    },
    idlocaldestino: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'terminalcarga',
        key: 'idterminalcarga'
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
    dtvalidadefinal: {
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
    vlrazaom3kg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteporkg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteminimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tptransittime: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrtransittime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpfrequencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrfrequencia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    txobservacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoacliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
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
    }
  }, {
    tableName: 'tabrodoviariacapa'
  });
};
