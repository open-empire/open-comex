/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('faturalsicapa', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'lsicapa',
        key: 'idprocesso'
      }
    },
    idlsicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idfaturalsicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nmfatura: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'faturalsicapa'
  });
};
