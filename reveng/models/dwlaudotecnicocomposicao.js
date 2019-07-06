/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwlaudotecnicocomposicao', {
    iddwlaudotecnico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dwlaudotecnico',
        key: 'iddwlaudotecnico'
      }
    },
    iddwlaudotecnicocomposicao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idmercadoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    vlpesoliquidounitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percentualperda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcoeficienteutilizacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidototal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtmercadoria: {
      type: DataTypes.DOUBLE,
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
    idunidademedidapeso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    snsubprodutoresiduo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpprocedencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlmercadoriaunitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpcoberturacambial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idunidademedidaaplicacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    dtlimiteinsumo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlunitariodolarsubproduto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snnaousarequivalencia: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'dwlaudotecnicocomposicao'
  });
};
