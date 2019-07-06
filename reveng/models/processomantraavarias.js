/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processomantraavarias', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idprocessomantraavarias: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idavaria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'avarias',
        key: 'idavarias'
      }
    }
  }, {
    tableName: 'processomantraavarias'
  });
};
