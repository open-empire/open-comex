/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('formulariocertificadonorma', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'formulariocertificadocapa',
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
    idformulariocertificadonorma: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    txordem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txnorma: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'formulariocertificadonorma'
  });
};
