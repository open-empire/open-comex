/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('classificacaoclientes', {
    idclassificacaoclientes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdclassificacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    apclassificacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descricaoclassificacao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'classificacaoclientes'
  });
};
