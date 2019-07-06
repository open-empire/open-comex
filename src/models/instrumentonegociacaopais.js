/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('instrumentonegociacaopais', {
    idinstrumentonegociacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'instrumentonegociacao',
        key: 'idinstrumentonegociacao'
      }
    },
    idinstrumentonegociacaopais: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpais: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    }
  }, {
    tableName: 'instrumentonegociacaopais'
  });
};
