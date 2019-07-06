/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipodeducao', {
    idtipodeducao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdtipodeducao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmtipodeducao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tipodeducao'
  });
};
