/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orgaoemissaoatolegal', {
    idorgaoemissaoatolegal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdorgaoemissaoatolegal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmorgaoemissaoatolegal: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'orgaoemissaoatolegal'
  });
};
