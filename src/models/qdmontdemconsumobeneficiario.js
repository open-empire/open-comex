/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qdmontdemconsumobeneficiario', {
    idqdmontdemonstrativoconsumo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'qdmontdemonstrativoconsumo',
        key: 'idqdmontdemonstrativoconsumo'
      }
    },
    idqdmontdemconsumobeneficiario: {
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
    tableName: 'qdmontdemconsumobeneficiario'
  });
};
