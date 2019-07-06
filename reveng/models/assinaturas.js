/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assinaturas', {
    idassinaturas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdassinaturas: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmassinaturas: {
      type: DataTypes.STRING,
      allowNull: true
    },
    arquivologotipo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'assinaturas'
  });
};
