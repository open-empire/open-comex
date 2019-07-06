/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('robosiscomex', {
    idlancamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idregistrotransmissao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    caminhoxmltransmissao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpprocesso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dttransmissao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtconsulta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtextrato: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idcertificado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cpfcertificado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    log: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrregistro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrlote: {
      type: DataTypes.STRING,
      allowNull: true
    },
    txterro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    arquivoretornolote: {
      type: "OID",
      allowNull: true
    },
    nrprocessoli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtnotificaousuario: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sntransmitindo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'robosiscomex'
  });
};
