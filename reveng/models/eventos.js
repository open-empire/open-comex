/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('eventos', {
    idevento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdevento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    przhoras: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    apevento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    przdias: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    inspecaoevento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmevento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    responsavelevento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    eventoativo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idetapaprocesso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'etapaprocesso',
        key: 'idetapaprocesso'
      }
    },
    bloqueadonofup: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snenviaritracking: {
      type: DataTypes.STRING,
      allowNull: true
    },
    permitirexclusaofup: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iditemdespesaevento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemdespesa',
        key: 'iditemdespesa'
      }
    },
    snrodoviario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snmaritimo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snaereo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snfluvial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snpostal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sntuboconduto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snlacustre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snferroviaria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snmeiosproprios: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snficta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sntodosmodais: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snimportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snexportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snagenciamentoexp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snagenciamentoimp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snoutros: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snlicenciamento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snremessaimp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snremessaexp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sndrawback: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snrodoviarionacional: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sntodosprodutos: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmeventoingles: {
      type: DataTypes.STRING,
      allowNull: true
    },
    siglaevento: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'eventos'
  });
};
