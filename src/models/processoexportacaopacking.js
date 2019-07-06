/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexportacaopacking', {
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
    idprocessoexportacaopacking: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    packinglist: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtemissao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cartacredito: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txobservacao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processoexportacaopacking'
  });
};
