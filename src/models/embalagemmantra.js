/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('embalagemmantra', {
    idembalagemmantra: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdembalagemmantra: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmembalagemmantra: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'embalagemmantra'
  });
};
