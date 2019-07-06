/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pessoaserviconotificaeventos', {
    idpessoaservico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pessoaservico',
        key: 'idpessoaservico'
      }
    },
    idserviconotificaeventos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idevento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'eventos',
        key: 'idevento'
      }
    },
    idgrupoemail: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'grupoemail',
        key: 'idgrupoemail'
      }
    }
  }, {
    tableName: 'pessoaserviconotificaeventos'
  });
};
