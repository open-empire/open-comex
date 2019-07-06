/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estafinanclancpessoa', {
    idestafinanclanc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'estafinanclanc',
        key: 'idestafinanclanc'
      }
    },
    idpessoacliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    }
  }, {
    tableName: 'estafinanclancpessoa'
  });
};
