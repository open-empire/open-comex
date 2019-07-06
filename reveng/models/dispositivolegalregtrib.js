/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dispositivolegalregtrib', {
    iddispositivolegalregtrib: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cddispositivolegalregtrib: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdispositivolegalregtrib: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'dispositivolegalregtrib'
  });
};
