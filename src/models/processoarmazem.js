/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processoarmazem', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idprocessoarmazem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nmarmazem: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processoarmazem'
  });
};
