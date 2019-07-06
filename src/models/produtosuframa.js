/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtosuframa', {
    idproduto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idprodutosuframa: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cdprodutosuframa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdescricaoprodutosuframa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpprodutosuframa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idprodutosuframachave: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'produtosuframa',
        key: 'idproduto'
      }
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idncmsuframa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    cdauxprodutosuframa: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'produtosuframa'
  });
};
