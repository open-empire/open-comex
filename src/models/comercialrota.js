/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comercialrota', {
    idcomercial: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'comercialservico',
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
    idtarifafretecapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tarifafretecapa',
        key: 'idtarifafretecapa'
      }
    },
    tptarifario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idagente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idtransportador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idmoedatarifario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    tpcarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdivisao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vldivisao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idtransprodoviarioexterior: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tabrodoviariacapa',
        key: 'idtabrodoviariacapa'
      }
    },
    idtransprodoviariobrasil: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tabrodoviariacapa',
        key: 'idtabrodoviariacapa'
      }
    },
    txobservacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcalcfretevenda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlcalcfretevenda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpcalctaxavenda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlcalctaxavenda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idpessoaestrangeira: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
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
    freetime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    txinformacaorota: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'comercialrota'
  });
};
