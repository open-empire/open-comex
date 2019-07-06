/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('laudotecnico', {
    idlaudotecnico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ano: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrlaudotecnico: {
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
    cdmercadoriaexportada: {
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
    idunidadeoperacional: {
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
    idproduto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    apmercadoriaexportada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idservico: {
      type: DataTypes.INTEGER,
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
    idncm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    idncmlaudo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    idunidademedidacompra: {
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
    mmdescricaoportugues: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mmobservcoes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlunitariomercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobrutounitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidounitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idnaladi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtmercadoriaexportada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdediascicloproducao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtaberturalaudo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlunitariomercadoriadolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    coeficienteunidadeestatistica: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'laudotecnico'
  });
};
