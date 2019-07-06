/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('formulariocertificadore', {
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
    idformulariocertificadore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrregistroresiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistroresiscomex: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idncm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    vlfob: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobruto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'formulariocertificadore'
  });
};
