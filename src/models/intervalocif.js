/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('intervalocif', {
    idintervalocif: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdintervalocif: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmintervalocif: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'intervalocif'
  });
};
