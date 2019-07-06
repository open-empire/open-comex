/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoexportacaoitemveic', {
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
    idprocessoexportacaoitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaoitemveic: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrchassis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrchasside: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrmarcade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrcontramarcade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesobrutochasside: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idprocessoexportacaore: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'processoexportacaoitemveic'
  });
};
