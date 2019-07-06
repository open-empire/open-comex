/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proformaexportacaoitem', {
    idproformaexportacaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'proformaexportacaocapa',
        key: 'idproformaexportacaocapa'
      }
    },
    idproformaexportacaoitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nritem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idmercadoria: {
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
    idnaladi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'naladi',
        key: 'idnaladi'
      }
    },
    vlquantidadeitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsaldodisponivel: {
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
    statusitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesoliquidounitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percentualcomissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpformapagamentocomissaoagente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlcomissaoagenteitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobrutoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlunitarioaquisicaoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalaquisicaoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalaquisicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpprecificacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlprecificacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlunitarioreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlunitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlexwitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmcvitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    txdescricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlfreteitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlacrescimoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldescontoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidadedisponivelitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidadebaixadaitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idfaturaexportacaocapa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idfaturaexportacaoitem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrordemcompra: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtordemcompra: {
      type: DataTypes.DATE,
      allowNull: true
    },
    txcompldescricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'proformaexportacaoitem'
  });
};
