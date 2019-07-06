/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dwatosuspensaoitemmatprimadi', {
    iddwatosuspensaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dwatosuspensaoitemmatprima',
        key: 'iddwatosuspensaocapa'
      }
    },
    iddwatosuspensaoitemmatprima: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iddwatosuspensaoitemmatprimadi: {
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
    nrpedido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtregistroli: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlmlemoedaitemdrawback: {
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
    cdunidadecomercializada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdunidademedidancm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aliquotaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicmscalculado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snorigemicmsibroker: {
      type: DataTypes.STRING,
      allowNull: true
    },
    referenciacliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlafrmmcalculado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbaseii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbaseiiconsumido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliiconsumido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipiconsumido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpisconsumido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsconsumido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicmsconsumido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlafrmmconsumido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlqtdeconsumidacomerc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidoconsumido: {
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
    vlqtdenacionalizada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdurfdespacho: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idufdespacho: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlpesobrutoadicao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobrutoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    conhecimentocargaid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    conhecimentocargaidmaster: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snmanipuladaviaplanilha: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltxsiscomexitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreduzidaii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercreducaoaliqii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreduzidaipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercreducaoaliqipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreduzidapis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreduzidacofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreduzidaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqreducaoicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sncalcularafrmm: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'dwatosuspensaoitemmatprimadi'
  });
};
