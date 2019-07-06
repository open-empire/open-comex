/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atoconcessorioimportadorec', {
    idatoconcessoriocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'atoconcessoriocapa',
        key: 'idatoconcessoriocapa'
      }
    },
    idatoconcessorioimportadorec: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idmercadoriacomposicao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idlaudotecnicocomposicao: {
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
    qtitemimportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtitemimportadoinformado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nmcomercialitemimportado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idlaudotecnico: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vltotalitemimportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdmercadoriaimportada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlunitarioitemimportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idncmitemimportado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    percentualperda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percentualresiduo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpregimeii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aliquotaipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpregimeipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aliquotaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpregimeicms: {
      type: DataTypes.STRING,
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
    tpregimepiscofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesoliquidoitemimportado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    seqitemsiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtautorizado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtsaldoli: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtutilizadodi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlautorizado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsaldoli: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlutilizadodi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcalculadoperda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalitemimportadocalculado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpcoberturacambial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdencmcalculada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vllocalembarque: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcoeficienteutilizacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idunidademedidaimportado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    idunidademedidapesoimp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    descricaomercadoriaimportada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtliquidancm: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmaximoadmitidoncm: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsaldorealizado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaldivinculadas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalsaldoimportacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdetotaldivinculadas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdetotalsaldoimportacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snitemreimportadoweb: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'atoconcessorioimportadorec'
  });
};
