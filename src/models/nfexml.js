/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nfexml', {
    idnfexml: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    numeronfe: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtemissao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nmemitente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cnpjcpfemitente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    chaveacesso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtrecuperacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mmxmlnfe: {
      type: "OID",
      allowNull: true
    }
  }, {
    tableName: 'nfexml'
  });
};
