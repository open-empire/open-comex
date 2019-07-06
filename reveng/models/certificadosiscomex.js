/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('certificadosiscomex', {
    idcertificado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    caminhocertificado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'certificadosiscomex'
  });
};
