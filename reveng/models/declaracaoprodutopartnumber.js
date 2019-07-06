/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('declaracaoprodutopartnumber', {
    iddeclaracaoproduto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'declaracaoprodutoexportador',
        key: 'iddeclaracaoproduto'
      }
    },
    iddeclaracaoprodutopartnumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    partnumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iddeclaracaoprodutoexportador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    }
  }, {
    tableName: 'declaracaoprodutopartnumber'
  });
};
