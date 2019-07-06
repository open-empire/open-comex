/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexportacaoprotcapa', {
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
    idprocessoexportacaoprotcapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    protocolo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtrecdocumento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtenviodocbanco: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtenviodocimportador: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idfuncionario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'funcionario',
        key: 'idfuncionario'
      }
    },
    txobservacaomercadoria: {
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
    }
  }, {
    tableName: 'processoexportacaoprotcapa'
  });
};
