/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qddemonstrativoconsumorenf', {
    idqdmontdemonstrativoconsumo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'qddemonstrativoconsumonf',
        key: 'idqdmontdemonstrativoconsumo'
      }
    },
    idqdmontdemonstrativomprima: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idqddemonstrativoconsumonf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idqddemonstrativoconsumorenf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrregistrore: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrore: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtembarquere: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cdncmre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesoliquidobaixadore: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidadebaixadare: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretebaixadore: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsegurobaixadore: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlebaixadore: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmcvbaixadore: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    descmercadoriare: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlcoeficienteitemcomposicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidobaixado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidadebaixada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidadecomercializada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    unidademedidancm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    percentualcomissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcomissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idncmre: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    idmercadoriaexportada: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    idmoeda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    vltaxaparidade: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlebaixadoredolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idlaudotecnico: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlmlebaixado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlebaixadodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlproporcaoajuste: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'qddemonstrativoconsumorenf'
  });
};
