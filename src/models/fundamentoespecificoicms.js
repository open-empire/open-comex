/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fundamentoespecificoicms', {
    idfundamentoespecificoicms: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdfundamentoespecificoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmfundamentoespecificoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpregimetributacao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'fundamentoespecificoicms'
  });
};
