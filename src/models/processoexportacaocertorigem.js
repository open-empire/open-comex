/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexportacaocertorigem', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processoexportacao',
        key: 'idprocesso'
      }
    },
    idprocessoexportacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaocertorigem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    certificadoorigem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtemissao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idlocalembarque: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    idacordo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'acordoaladi',
        key: 'idacordoaladi'
      }
    },
    motorista: {
      type: DataTypes.STRING,
      allowNull: true
    },
    placacaminhao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txcabecalho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txobservacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idassinatura: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'assinaturas',
        key: 'idassinaturas'
      }
    },
    consignatario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    paisconsignatario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idportoembarque: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'terminalcarga',
        key: 'idterminalcarga'
      }
    },
    idembalagem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'embalagem',
        key: 'idembalagem'
      }
    },
    sntxtfiespgerado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrfatura: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtfatura: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'processoexportacaocertorigem'
  });
};
