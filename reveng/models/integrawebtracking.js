/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('integrawebtracking', {
    idintegrawebtracking: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mmdados: {
      type: "OID",
      allowNull: true
    },
    pathxml: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'integrawebtracking'
  });
};
