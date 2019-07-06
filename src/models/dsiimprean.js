/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dsiimprean', {
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
    iddsiimprean: {
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
    tableName: 'dsiimprean'
  });
};
