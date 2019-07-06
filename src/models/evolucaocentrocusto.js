/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('evolucaocentrocusto', {
    idevolucaocentrocusto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idevolucaocentrocustoseq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcentrocusto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'centrocusto',
        key: 'idcentrocusto'
      }
    },
    nivel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    janeiro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    fevereiro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    marco: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    abril: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    maio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    junho: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    julho: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    agosto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    setembro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    outubro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    novembro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dezembro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ordem: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'evolucaocentrocusto'
  });
};
