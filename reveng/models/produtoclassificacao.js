/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtoclassificacao', {
    idprodutoclassificacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdprodutoclassificacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmprodutoclassificacao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'produtoclassificacao'
  });
};
