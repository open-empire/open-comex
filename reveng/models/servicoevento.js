/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servicoevento', {
    idservico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'servico',
        key: 'idservico'
      }
    },
    idservicoevento: {
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
    ideventobase: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'eventos',
        key: 'idevento'
      }
    },
    ideventofuturo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    przeventofuturo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpprzeventobase: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ordemservicoevento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    przeventobase: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpprzeventofuturo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpcontrole: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snobrigatorioanterior: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snresponsabilidadecliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    prazoevento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpdestinatarioemailatraso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpformacontrole: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpprazocanalverde: {
      type: DataTypes.STRING,
      allowNull: true
    },
    prazocanalverde: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpprazocanalamarelo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    prazocanalamarelo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpprazocanalvermelho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    prazocanalvermelho: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpprazocanalcinza: {
      type: DataTypes.STRING,
      allowNull: true
    },
    prazocanalcinza: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sndiasuteis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snconclusormantra: {
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
    snobrigarocorrenciaseatrasado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snenviaritracking: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snalterardtrealizacao: {
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
    tableName: 'servicoevento'
  });
};
