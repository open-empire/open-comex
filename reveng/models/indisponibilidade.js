/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('indisponibilidade', {
    idindisponibilidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdindisponibilidade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmindisponibilidade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'indisponibilidade'
  });
};
