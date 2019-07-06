/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qdmontdemonstrativoconsumore', {
    idqdmontdemonstrativoconsumo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'qdmontdemonstrativoconsumo',
        key: 'idqdmontdemonstrativoconsumo'
      }
    },
    idqdmontdemonstrativore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrregistrore: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrore: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtembarquere: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cdncmre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesoliquidore: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    descmercadoriare: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tiporegistro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdunidadecomercializada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    unidadecomercializada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idunidadecomercializada: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unidademedidancm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    percentualcomissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcomissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalmlere: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idncmexportado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
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
    qtdeunidadecomercial: {
      type: DataTypes.DOUBLE,
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
    vltaxaparidade: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlebaixadoredolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtnotafiscal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlpesounidadeestatisticare: {
      type: DataTypes.DOUBLE,
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
    snincluiremquadromontado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    notafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdemercadoriaajustada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidadeajustada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlproporcaoajuste: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'qdmontdemonstrativoconsumore'
  });
};
