/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dsiimpreit', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dsicapa',
        key: 'idprocesso'
      }
    },
    iddsicapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddsiimpreit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddsiitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    }
  }, {
    tableName: 'dsiimpreit'
  });
};
