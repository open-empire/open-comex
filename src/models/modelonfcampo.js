/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modelonfcampo', {
    idmodelonf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'modelonf',
        key: 'idmodelonf'
      }
    },
    idmodelonfcampo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dadoscapaitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdcampo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descricaocampo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcampofisico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tipodados: {
      type: DataTypes.STRING,
      allowNull: true
    },
    habilitadonfe: {
      type: DataTypes.STRING,
      allowNull: true
    },
    habilitadonfc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fixo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    formulanfe: {
      type: DataTypes.STRING,
      allowNull: true
    },
    formulanfc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    formulanfs: {
      type: DataTypes.STRING,
      allowNull: true
    },
    formulanfsc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    formulanfr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    formulanff: {
      type: DataTypes.STRING,
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tipocampo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdcampoformulario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tabela: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campotabela: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tamanhodecimal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tamanhointeiro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    formulanfd: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'modelonfcampo'
  });
};
