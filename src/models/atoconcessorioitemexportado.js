/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atoconcessorioitemexportado', {
    idatoconcessoriocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'atoconcessoriocapa',
        key: 'idatoconcessoriocapa'
      }
    },
    idatoconcessorioitemexportado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idmercadoriacomposicao: {
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
    qtitemexportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idlaudotecnicocomposicao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nmcomercialitemexportado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idlaudotecnico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'laudotecnico',
        key: 'idlaudotecnico'
      }
    },
    vltotalitemexportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdmercadoriaexportada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlunitarioitemexportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idncmitemexportado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    vlpesoliquidoitemexportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidounititemexportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tporigemitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    seqitemsiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalitemcomcobertura: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalitemsemcobertura: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percentualitemcomissaoagente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlitemcomissaoagente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idunidademedidaexportado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    idunidademedidapesoexp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    percentualcomissaoagente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcomissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlliquidocomcobertura: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlliquidosemcobertura: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfatortolerancia: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    descricaomercadoriaexportada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltotalrevinculadas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalsaldoexportacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdetotalrevinculadas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdetotalsaldoexportacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdetotalrevinculadascomerc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdetotalitemexpaccomerc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdetotalsaldoitemexpaccomerc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idunidademedidaexpcomercac: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    snitemreimportadoweb: {
      type: DataTypes.STRING,
      allowNull: true
    },
    totalrevinculada: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qtitemexportadoestat: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snenviarpararetificacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snincluirnaretificacao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'atoconcessorioitemexportado'
  });
};
