/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoparametrizacao', {
    idprocessoparametrizacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    nomedofiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    situacaodespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    etapadespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    datadesembaraco: {
      type: DataTypes.DATE,
      allowNull: true
    },
    datahoraconsulta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dataautorientrmerc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    datarecepcao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dataselecdi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    datainterruptdoctal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dataretificacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dataultdistrib: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dataanalise: {
      type: DataTypes.DATE,
      allowNull: true
    },
    datahorabloqueio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dataentrantec: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fiscalultdistrib: {
      type: DataTypes.STRING,
      allowNull: true
    },
    situacaoafrmm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrdocumento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cognomefiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mensagem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    canal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dossievinculado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    icms: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processoparametrizacao'
  });
};
