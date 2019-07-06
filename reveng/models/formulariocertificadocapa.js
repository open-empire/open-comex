/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('formulariocertificadocapa', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processoexportacao',
        key: 'idprocesso'
      }
    },
    idprocessoexportacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaocertorigem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idformulariocertificadocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrfatura: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtfatura: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'formulariocertificadocapa'
  });
};
