/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('faturalicapa', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'licapa',
        key: 'idprocesso'
      }
    },
    idlicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idfaturalicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nmfatura: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'faturalicapa'
  });
};
