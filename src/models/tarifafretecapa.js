/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarifafretecapa', {
    idtarifafretecapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdtarifafretecapa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dtlancamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nmdescricaotarifa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoaagente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
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
    idusuariolanc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
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
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tptarifario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpmodal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txobservacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txtarifario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    freetime: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'tarifafretecapa'
  });
};
