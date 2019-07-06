/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexportacaoprotdoctos', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processoexportacaoprotcapa',
        key: 'idprocesso'
      }
    },
    idprocessoexportacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaoprotcapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaoprotdoctos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddocumentacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'documentacao',
        key: 'iddocumentacao'
      }
    },
    referencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdeoriginaisbanco: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtdecopiasbanco: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtdeoriginaisexportador: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtdecopiasexportador: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtdeoriginaisimportador: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtdecopiasimportador: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    snobteraceite: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snobterpagamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sncontraaceite: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sncontrapagamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snlivredepagamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snprotestarporfaltapagamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txobservacaodocumento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snentregue: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processoexportacaoprotdoctos'
  });
};
