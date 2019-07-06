/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processodadosauxiliares', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    nmocorrenciasultimoevtiportal: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processodadosauxiliares'
  });
};
