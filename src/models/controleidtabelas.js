/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('controleidtabelas', {
    idcontroleidtabelas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nmtabela: {
      type: DataTypes.STRING,
      allowNull: true
    },
    auxiliar: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sequencialcontroleid: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'controleidtabelas'
  });
};
