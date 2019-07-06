/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('templatefaturamento', {
    idtemplatefaturamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdtemplatefaturamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmtemplatefaturamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'templatefaturamento'
  });
};
