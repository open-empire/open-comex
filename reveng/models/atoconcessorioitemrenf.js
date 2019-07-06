/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atoconcessorioitemrenf', {
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
    idatoconcessorioitemseqrenf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tpregistrosiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrregistrosiscomex: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrosiscomex: {
      type: DataTypes.DATE,
      allowNull: true
    },
    qtregistrosiscomex: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlregistrosiscomex: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tipocoberturacambial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idncmexportado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idmercadoriaexportada: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idmoeda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idlaudotecnicopedido: {
      type: DataTypes.INTEGER,
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
    unidadecomercializada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    unidademedidancm: {
      type: DataTypes.STRING,
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
    percentualcomissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcomissao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxaparidade: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlebaixadoredolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtpreparacaobaixasiscomex: {
      type: DataTypes.DATE,
      allowNull: true
    },
    qtdeunidadecomercial: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdeitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'atoconcessorioitemrenf'
  });
};
