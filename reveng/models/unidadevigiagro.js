/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('unidadevigiagro', {
    idunidadevigiagro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdunidadevigiagro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmunidadevigiagro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cduf: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'unidadevigiagro'
  });
};
