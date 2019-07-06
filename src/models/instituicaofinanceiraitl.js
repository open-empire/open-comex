/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('instituicaofinanceiraitl', {
    idinstituicaofinanceiraitl: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdinstituicaofinanceiraitl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nminstituicaofinanceiraitl: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'instituicaofinanceiraitl'
  });
};
