/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwlaudotecnico', {
    iddwlaudotecnico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ano: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dtaberturalaudo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrlaudotecnico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    resumo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrreferenciacliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmengenheirolaudo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrcreaengenheiro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
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
    mmobservcoes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesoliquidounitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobrutounitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdediascicloproducao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtmercadoriaexportada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpcoeficienteaplicacao: {
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
    vlfatorqtdevenda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfatorqtdeestatistica: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtvalidadelaudo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idunidademedidavenda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    sninativo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'dwlaudotecnico'
  });
};
