/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('followupprocesso', {
    idprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'processo',
        key: 'idprocesso'
      }
    },
    idfollowupprocesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idevento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'eventos',
        key: 'idevento'
      }
    },
    dtrealizacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtprevisao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snobrigaeventoanterior: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcontrole: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    nrordem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrprazo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpdestinatarioemailatraso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndiasuteis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpdestinatarioemailantecipado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tempoantecipado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dtprevisaoinicial: {
      type: DataTypes.DATE,
      allowNull: true
    },
    snemaileventoenviado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snenviaremaileventorealizado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snenviado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snconclusormantra: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snenviaritracking: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ideventobase: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpformacontrole: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snenvemaileverealizadoatraso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    observacaointerna: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snalterardataprevisao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sneventobrignaconclop: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'followupprocesso'
  });
};
