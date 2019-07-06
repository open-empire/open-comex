/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('declaracaoprodutoexportador', {
    iddeclaracaoproduto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'declaracaoproduto',
        key: 'iddeclaracaoproduto'
      }
    },
    iddeclaracaoprodutoexportador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'declaracaoprodutoexportador'
  });
};
