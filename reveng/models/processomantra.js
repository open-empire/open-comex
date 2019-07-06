/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('processomantra', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    aeroportoorigem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aeroportodestino: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtconhecimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlrfreteprepaidmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfretecollectmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrqtdevolume: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrpesobruto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoedafrete: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    idurfentrada: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'urf',
        key: 'idurf'
      }
    },
    dtinclusaomantra: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrtermo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrvoo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtsaida: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtchegada: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrdta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idtratamentocarga: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tratamentocarga',
        key: 'idtratamentocarga'
      }
    },
    idembalagemmantra: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'embalagemmantra',
        key: 'idembalagemmantra'
      }
    },
    armazenamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtultimaconsulta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    memotelasmantra: {
      type: "OID",
      allowNull: true
    },
    idultimaindisponibilidade: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'indisponibilidade',
        key: 'idindisponibilidade'
      }
    },
    dtultimaindisponibilidade: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtultimoevento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    responsavelultimoevento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descricaoultimoevento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpmanifestocarga: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'processomantra'
  });
};
