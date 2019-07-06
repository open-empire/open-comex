/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexportacaopackingit', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processoexportacaoitem',
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
    idprocessoexportacaopackingit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaoitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    vlquantidadebaixada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    saldo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'processoexportacaopackingit'
  });
};
