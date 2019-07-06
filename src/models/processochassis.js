/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processochassis', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idprocessochassis: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrchassis: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processochassis'
  });
};
