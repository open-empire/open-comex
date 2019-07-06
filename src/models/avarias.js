/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('avarias', {
    idavarias: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdavaria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmavaria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'avarias'
  });
};
