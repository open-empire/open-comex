/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('regiaocontinente', {
    idregiaocontinente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdregiaocontinente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmregiaocontinente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'regiaocontinente'
  });
};
