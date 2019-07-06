/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('naladincca', {
    idnaladincca: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdnaladincca: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmnaladincca: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmdescricaoportuguesncca: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmdescricaoespanholncca: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'naladincca'
  });
};
