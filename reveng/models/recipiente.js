/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recipiente', {
    idrecipiente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdrecipiente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmrecipiente: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'recipiente'
  });
};
