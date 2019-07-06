/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('declaracaoprodutoitens', {
    iddeclaracaoproduto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'declaracaoproduto',
        key: 'iddeclaracaoproduto'
      }
    },
    iddeclaracaoprodutoitens: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idmercadoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    vlitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'declaracaoprodutoitens'
  });
};
