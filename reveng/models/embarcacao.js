/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('embarcacao', {
    idembarcacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdembarcacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmembarcacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpaisbandeira: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    }
  }, {
    tableName: 'embarcacao'
  });
};
