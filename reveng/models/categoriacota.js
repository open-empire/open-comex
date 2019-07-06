/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categoriacota', {
    idcategoriacota: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdcategoriacota: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcategoriacota: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'categoriacota'
  });
};
