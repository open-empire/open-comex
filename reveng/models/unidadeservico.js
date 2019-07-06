/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('unidadeservico', {
    idpessoaunidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idunidadeservico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idservico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'servico',
        key: 'idservico'
      }
    }
  }, {
    tableName: 'unidadeservico'
  });
};
