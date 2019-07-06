/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produto', {
    idproduto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdproduto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmproduto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    apelidoproduto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    statusproduto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idprodutoclassificacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'produtoclassificacao',
        key: 'idprodutoclassificacao'
      }
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'produto'
  });
};
