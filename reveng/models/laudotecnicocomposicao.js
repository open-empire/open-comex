/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('laudotecnicocomposicao', {
    idlaudotecnico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'laudotecnico',
        key: 'idlaudotecnico'
      }
    },
    idlaudotecnicocomposicao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idmercadoria: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cdmercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    apmercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmmercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idncmmateriaprima: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    vlpesounitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmercadoriaunitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percentualperda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmercadoriatotal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesototal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtmercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmateriaprima: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idunidademedida: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    aliquotaii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretemercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguromercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesamercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldescontomercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcoeficienteutilizacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idunidademedidapeso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    tpprocedencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlmercadoriaunitariodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmercadoriatotaldolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpcoberturacambial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snsubprodutoresiduo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    coeficienteunidadeestatistica: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'laudotecnicocomposicao'
  });
};
