/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contacorrentecliente', {
    idcontacorrentecliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcontacorrenteclienteseq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cdcliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmcliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cnpjcpfcliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    periodoinicial: {
      type: DataTypes.DATE,
      allowNull: true
    },
    periodofinal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlsaldoanterior: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcreditos: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldebitos: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsaldo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'contacorrentecliente'
  });
};
