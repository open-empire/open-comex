/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agenciasecex', {
    idagenciasecex: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdagenciasecex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmagenciasecex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cgcagenciasecex: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'agenciasecex'
  });
};
