/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pessoainscricaoestadual', {
    idpessoa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoainscricaoestadual: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    inscricaoestadual: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'pessoainscricaoestadual'
  });
};
