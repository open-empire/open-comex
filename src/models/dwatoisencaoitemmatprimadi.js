/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwatoisencaoitemmatprimadi', {
    iddwatoisencaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dwatoisencaoitemmatprima',
        key: 'iddwatoisencaocapa'
      }
    },
    iddwatoisencaoitemmatprima: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddwatoisencaoitemmatprimadi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nrregistrodi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistrodi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nradicao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nritem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrregistroli: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtdesembaraco: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cdmoeda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdncm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nmdescricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesoliquidoadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtde: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdmcvadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidadecomercializada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtdestatadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    unidademedidancm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlmcvadicaoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleadicaoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleadicaomoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmcvadicaodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleadicaodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteadicaodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteadicaoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroadicaodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroadicaoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesasadicaodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesasadicaoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlacrescimosadicaodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlacrescimosadicaoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducoesadicaodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducoesadicaoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    regimetributacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtcotacaoutilizada: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vltxcotacaoutilizada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleitemdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleitemmoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteitemdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroitemdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdestatitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdeconsumida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmcvitemunitmoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmcvitemtotalmoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmcvitemunitdolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmcvitemtotaldolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmcvadicaomoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    siglamoeda: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesoliquidorud: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmledolarrud: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmlerud: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtderud: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idfaturamento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    aliquotacofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsdevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsrecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliidevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliirecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotaipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipidevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipirecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    aliquotapis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpisdevido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpisrecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdunidadecomercializada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdunidademedidancm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fatorqtdeunidcomecializada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    fatorqtdeunidestatistica: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    fatorespecifico: {
      type: DataTypes.STRING,
      allowNull: true
    },
    caluculovalidado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlfrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfreteitemreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroitemreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdecomercrud: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmercadoriaespecifica: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mercadoria',
        key: 'idmercadoria'
      }
    },
    snmanipuladaviaplanilha: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'dwatoisencaoitemmatprimadi'
  });
};
