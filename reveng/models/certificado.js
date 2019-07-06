/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('certificado', {
    idcertificado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cpfcnpj: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtinclusao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtvalidadeini: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtvalidadefim: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sndue: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snde: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    certificado: {
      type: "OID",
      allowNull: true
    },
    tpcertificado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    senhacertificadoa3: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'certificado'
  });
};
