/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modelodescricaore', {
    idmodelodescricaore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdmodelodescricaore: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmodelodescricaore: {
      type: DataTypes.STRING,
      allowNull: true
    },
    parametrodescricaore: {
      type: DataTypes.STRING,
      allowNull: true
    },
    parametroquebralinha: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpmodelodescricao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'modelodescricaore'
  });
};
