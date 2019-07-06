/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tratamentocarga', {
    idtratamentocarga: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdtratamentocarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmtratamentocarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tratamentocarga'
  });
};
