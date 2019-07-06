/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('conhecimentos', {
    idpessoa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'serieconhecimento',
        key: 'idpessoa'
      }
    },
    idserieconhecimento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idconhecimentos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrconhecimento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snutilizado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idunidadenegocio: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'conhecimentos'
  });
};
