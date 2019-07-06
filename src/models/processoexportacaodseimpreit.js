/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexportacaodseimpreit', {
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
    idprocessoexportacaodsecapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaodseimpreit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaodseitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    complemantar: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processoexportacaodseimpreit'
  });
};
