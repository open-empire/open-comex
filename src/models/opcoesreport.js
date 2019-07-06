/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('opcoesreport', {
    idopcoesreport: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'opcoesreport'
  });
};
