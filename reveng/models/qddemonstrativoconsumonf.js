/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qddemonstrativoconsumonf', {
    idqdmontdemonstrativoconsumo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'qdmontdemonstrativomprima',
        key: 'idqdmontdemonstrativoconsumo'
      }
    },
    idqdmontdemonstrativomprima: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idqddemonstrativoconsumonf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrnotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrserienotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtemissaonotafiscal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    modelonotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrncmnf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoafornecedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    descricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlquantidadecomercializada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidademedidacomerc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlquantidadeunidadeestatistica: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotaldolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    totalpesocoeficiente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    totalqtdecoeficiente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    totalvalorcoeficiente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidademedidaestatistica: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'qddemonstrativoconsumonf'
  });
};
