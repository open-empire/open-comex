/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modelocalculotrade', {
    idmodelocalculotrade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdmodelocalculotrade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descricaomodelocalculotrade: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'modelocalculotrade'
  });
};
