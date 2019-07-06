/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('motivosemcobertura', {
    idmotivosemcobertura: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdmotivosemcobertura: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmotivosemcobertura: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'motivosemcobertura'
  });
};
