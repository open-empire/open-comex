/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('naladi', {
    idnaladi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idnaladi96: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'naladi96',
        key: 'idnaladi96'
      }
    },
    cdnaladi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmnaladi: {
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
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'naladi'
  });
};
