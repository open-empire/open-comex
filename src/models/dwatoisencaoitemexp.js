/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwatoisencaoitemexp', {
    iddwatoisencaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dwatoisencaocapa',
        key: 'iddwatoisencaocapa'
      }
    },
    iddwatoisencaoitemexp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idmercadoriaexp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    idncm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    idunidademedida: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    idunidademedidapeso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    vlpesoliquidounitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidototal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlemoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmledolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdediascicloproducao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtde: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iddwlaudotecnico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dwlaudotecnico',
        key: 'iddwlaudotecnico'
      }
    },
    vltotalcomissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcomissaodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtvinculacaore: {
      type: DataTypes.DATE,
      allowNull: true
    },
    qtdecomercializada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdefatoraplicado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'dwatoisencaoitemexp'
  });
};
