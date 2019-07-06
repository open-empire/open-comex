/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mercadoriacomposicao', {
    idmercadoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    idmercadoriacomposicao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idunidademedida: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    percentualperda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotal: {
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
      allowNull: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    idncmcomposicao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    vlcoeficienteutilizacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snitemintermediario: {
      type: DataTypes.STRING,
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
    vltotaldolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'mercadoriacomposicao'
  });
};
