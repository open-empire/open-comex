/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nivelnve', {
    idnivelnve: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdnivelnve: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmnivelnve: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'nivelnve'
  });
};
