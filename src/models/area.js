/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('area', {
    idarea: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    aparea: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdarea: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmarea: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'area'
  });
};
