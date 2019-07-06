/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexportacaodueeventos', {
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
    idprocessoexportacaodueeventos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ideventohistorico: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    evento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    responsavel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    informacoesadicionais: {
      type: DataTypes.STRING,
      allowNull: true
    },
    motivo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    detalhes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dthoraeventohistorico: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'processoexportacaodueeventos'
  });
};
