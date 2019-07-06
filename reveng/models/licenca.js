/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('licenca', {
    idlicenca: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nomesistema: {
      type: DataTypes.STRING,
      allowNull: true
    },
    systemkey: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'licenca'
  });
};
