/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('controlenotificacoes', {
    idcontrolenotificacoes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdcontrolenotificacoes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcontrolenotificacoes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snlirejeitada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snliregistrada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snlideferida: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snliindeferida: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snliemanuencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'controlenotificacoes'
  });
};
