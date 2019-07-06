/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qddemonstrativoconsumodi', {
    idqdmontdemonstrativoconsumo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'qdmontdemonstrativomprima',
        key: 'idqdmontdemonstrativoconsumo'
      }
    },
    idqdmontdemonstrativomprima: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idqddemonstrativoconsumodi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrregistrodi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrodi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nradicaodi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nritemdi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrncmadicao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descmercadoriaitemdi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlquantidadeitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidokgitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    totalpesocoeficiente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    totalmledolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    totalqtdecoeficiente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidademedidacomerc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtdesembaraco: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtentradaestoquedi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlproporcaoajuste: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoeda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    idhistoricodicapa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'historicodiitem',
        key: 'idhistoricodicapa'
      }
    },
    idhistoricodiadicao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idhistoricodiitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    totalmcvdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    totalfretedolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    totalsegurodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    totalmlecoeficiente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidademedidaestatistica: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'qddemonstrativoconsumodi'
  });
};
