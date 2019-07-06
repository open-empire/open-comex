/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atoconcessoriobeneficiario', {
    idatoconcessoriocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'atoconcessoriocapa',
        key: 'idatoconcessoriocapa'
      }
    },
    idatoconcessoriobeneficiario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpessoabeneficiario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    }
  }, {
    tableName: 'atoconcessoriobeneficiario'
  });
};
