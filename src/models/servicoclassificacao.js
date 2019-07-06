/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servicoclassificacao', {
    idservicoclassificacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nmservicoclassificacao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'servicoclassificacao'
  });
};
