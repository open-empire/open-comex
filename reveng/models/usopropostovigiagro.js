/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usopropostovigiagro', {
    idusopropostovigiagro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdusopropostovigiagro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmusopropostovigiagro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tprequerimento: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'usopropostovigiagro'
  });
};
