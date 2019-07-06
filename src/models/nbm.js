/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nbm', {
    idnbm: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdnbm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    apnbm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmdescricaonbm: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'nbm'
  });
};
