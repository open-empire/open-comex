/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexportacaoreitens', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processoexportacaore',
        key: 'idprocesso'
      }
    },
    idprocessoexportacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaoreitens: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descricaoitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlmcvitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    quantidadecomercializadaitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    quantidadeestatisticaitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    pesoliquidoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'processoexportacaoreitens'
  });
};
