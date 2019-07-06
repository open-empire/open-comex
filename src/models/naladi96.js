/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('naladi96', {
    idnaladi96: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdnaladi96: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmnaladi96: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmdescricaoportugues: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmdescricaoespanhol: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'naladi96'
  });
};
