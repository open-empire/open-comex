/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('didmi', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddidmi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sequenciadmi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    numerodmi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpsituacaotributariadmi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpespeciesituacaotribdmi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpsituacaodmi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpercagregacaodmi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqicmsitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliiitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipiitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vloutrosimpostos: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesasaduaneira: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlperccargatributaria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpautafiscalreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpautaqtdedeunidade: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercpresumido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercdiferimento: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpisitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercicmssubstituicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'didmi'
  });
};
