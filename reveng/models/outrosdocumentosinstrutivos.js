/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('outrosdocumentosinstrutivos', {
    idoutrosdocumentosinstrutivos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdoutrosdocumentosinstrutivos: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmoutrosdocumentosinstrutivos: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'outrosdocumentosinstrutivos'
  });
};
