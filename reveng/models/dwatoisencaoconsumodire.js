/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwatoisencaoconsumodire', {
    iddwatoisencaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dwatoisencaocapa',
        key: 'iddwatoisencaocapa'
      }
    },
    iddwatoisencaoconsumodire: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddwatoisencaoitemmatprima: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    iddwatoisencaoitemexp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    dtregistrodi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtdesembaracodi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrregistrodi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nradicaodi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nritemdi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdeconsumidadi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    pesoconsumidodi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlemoedadi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmledolardi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretedolardi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsegurodolardi: {
      type: DataTypes.DOUBLE,
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
    nrregistrore: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrnotafiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtnotafiscal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    qtdenotafiscal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    pesonotafiscal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlnotafiscal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlnotafiscaldolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nritemre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cditemexp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cditemmatprima: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdecomercialitotaltemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdecomercialconsumidaitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdeestatisticatotalitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdeestatisticaconsumidaitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    fatorqtdeconpradi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    fatorqtdeestatisticadi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    fatortabelaconversaodi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    fatorqtdeconsumidadi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    coeficientedi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tipocoeficienteaplicadodi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdecomercialtotalitemre: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdecomercialconsumidaitemre: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdeestatisticatotalitemre: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdeestatisticaconsumidaitemre: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    fatorqtdecomprare: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    fatorqtdeestatisticare: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    fatortabelaconversao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    fatorqtdeconsumidare: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdeestaitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    saldoqtdeestatisticadi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidadeestatisticadi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdecomercialdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdecomercialitemdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    saldoqtdecomercialdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidadecomercialdi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    unidadeestatisticare: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdecomercialre: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidadecomercialre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdeestaplicadare: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdecomaplicadare: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidoaplicadare: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlemoedaaplicadare: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmledolaraplicadare: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdenecessariaestdi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpprocedencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdmoeda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    siglamoeda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    unidadeaplicacaodi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    unidadeaplicacaore: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdunidadecomercializadadi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdunidadecomercializadare: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdmoedare: {
      type: DataTypes.STRING,
      allowNull: true
    },
    siglamoedare: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qtdeconsumidanf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdeconsumidacomercnf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    pesoconsumidonf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdenotafiscalcomerc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlconsumidonotafiscal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlconsumidonotafiscaldolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    saldoqtdeestatisticanf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    saldoqtdecomercialnf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    coeficientenf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tipocoeficienteaplicadonf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    unidadeestatisticanf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    unidadecomercialnf: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlmleatual: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ncminsumo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ncmexportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrlaudotecnico: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'dwatoisencaoconsumodire'
  });
};
