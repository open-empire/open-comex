/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('formulariocertificadoordem', {
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
    idformulariocertificadoordem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocessoexportacaocertordem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    nrordem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    naladi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    volumes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txdescricaoordem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    criterioorigem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobruto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    quantidade: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    valorfobdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'formulariocertificadoordem'
  });
};
