/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupoterminalcarga', {
    idgrupoterminalcarga: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdgrupoterminalcarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmgrupoterminalcarga: {
      type: DataTypes.STRING,
      allowNull: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'grupoterminalcarga'
  });
};
