/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwatoisencaoitemmatprima', {
    iddwatoisencaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dwatoisencaocapa',
        key: 'iddwatoisencaocapa'
      }
    },
    iddwatoisencaoitemmatprima: {
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
    qtde: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpprocedencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlfretedolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsegurodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    potencialimportacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrtotalimportardolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdetotalimportar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrimportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdeimportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrsaldoimportar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdesaldoimportar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percimportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    perccomprovado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrprevistoimportar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdeprevistoimportar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrsaldoprevistoimportar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdesaldoprevistoimportar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percpreistoimportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percprevistocomprovado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdetotalnf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrtotalnf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percvalorimportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percqtdeimportada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtvinculacaodi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    aliquotaii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotapis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotacofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaliiefetivo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalipiefetivo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalpisefetivo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcofinsefetivo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalicmsefetivo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlafrmm: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nritemdrawbackweb: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nranexo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idfamiliaequivalencia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'familiaequivalencia',
        key: 'idfamiliaequivalencia'
      }
    }
  }, {
    tableName: 'dwatoisencaoitemmatprima'
  });
};
