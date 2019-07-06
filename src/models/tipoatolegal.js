/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipoatolegal', {
    idtipoatolegal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdtipoatolegal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmtipoatolegal: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tipoatolegal'
  });
};
