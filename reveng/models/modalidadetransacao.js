/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modalidadetransacao', {
    idmodalidadetransacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdmodalidadetransacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmodalidadetransacao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'modalidadetransacao'
  });
};
