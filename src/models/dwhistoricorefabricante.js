/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwhistoricorefabricante', {
    iddwhistoricore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dwhistoricore',
        key: 'iddwhistoricore'
      }
    },
    iddwhistoricorefabricante: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: true
    },
    uf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtde: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlemoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'dwhistoricorefabricante'
  });
};
