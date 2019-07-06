/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atoconcessorioexportadore', {
    idatoconcessoriocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'atoconcessorioitemexportado',
        key: 'idatoconcessoriocapa'
      }
    },
    idatoconcessorioitemexportado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idatoconcessorioexportadore: {
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
    snincluiremquadromontado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    razaodoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtpreparacaobaixasiscomex: {
      type: DataTypes.DATE,
      allowNull: true
    },
    qtdemercadoriadrawback: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmercadoriadrawback: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdemercadoriadrawbackdisp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmercadoriadrawbackdisp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdemercadoriaajustada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    situacaore: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdeoriginalre: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vloriginalre: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    pesoliquidooriginalre: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'atoconcessorioexportadore'
  });
};
