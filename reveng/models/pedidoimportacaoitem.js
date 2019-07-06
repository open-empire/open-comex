/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidoimportacaoitem', {
    idpedidoimportacaocapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pedidoimportacaocapa',
        key: 'idpedidoimportacaocapa'
      }
    },
    idpedidoimportacaoitem: {
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
    vlquantidade: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idunidademedidacompra: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    vlunitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesounitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idunidademedidapeso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    vlpesoliquido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpcalculo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpercentualdesconto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldesconto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoedamle: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    nmdescricaoitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idpessoaexportador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idpessoafabricante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
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
    snnecessitali: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idnaladi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'naladi',
        key: 'idnaladi'
      }
    },
    idpaisorigem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    idpaisaquisicao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'idpais'
      }
    },
    tpregimeii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpacordoii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliquotaacordoii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliquotareducaoii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliquotaii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasecalculoii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlnormalii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrecolherii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpregimeipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliquotareducaoipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliquotaipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasecalculoipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlnormalipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrecolheripi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpregimeicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpreducaoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliquotareducaoicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliquotaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasecalculoicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrecolhericms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretemoedanegociada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretemoedanacional: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguromoedanegociadac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguromoedanacional: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxasiscomex: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasecalculopiscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliquotapis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrecolherpis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliquotacofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrecolhercofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsaldodisponivelfatura: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfobdeclaradoitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifreaisitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpregimepiscofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlcustototalitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercentualvrd: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfobreaisitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifmoedanegitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpusofinal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlperclucro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercipisaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercicmssaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldifipisaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldificmssaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasecalculonfs: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idipiespecificounidade: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    vlipiespecificovalor: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipiespecificoqtde: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipiespecificocaprecipiente: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idipiespecificorecepiente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recipiente',
        key: 'idrecipiente'
      }
    },
    vlacrescimoreaisitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlacrescimomoedanegitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducaoreaisitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducaomoedanegitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpbasecalculoantidumping: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlanti: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlantidumping: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipisaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlicmssaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercsubsttributaria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercmva: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsubsttributaria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasesubsttributaria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mmintegracao: {
      type: "OID",
      allowNull: true
    },
    tpfabricexpo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlsegurocomplementaritem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercpissaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlperccofinssaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbase: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfatorcalculonfs: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpisnfs: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinsnfs: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercreducaobaseicmssaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobruto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesanfs: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpcalculoespecial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlaliqicmspiscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrserieitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iddepartamentoaplicacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'departamento',
        key: 'iddepartamento'
      }
    },
    vlmcvmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmcvmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlunitariomcvmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesaicmsentrada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmcvcambioantecipado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqirrf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlirrfitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqcsll: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcsllitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlaliqlucro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliaritem01: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliaritem02: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliaritem03: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliaritem04: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliaritem05: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliaritem06: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliaritem07: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliaritem08: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliaritem09: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliaritem10: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    complementomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtsolicitacaoembarque: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtnecessidadefabrica: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vldespesaitemmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesaitemmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldescontoitemmneg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldescontoitemmnac: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nrinvoiceitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrseqinvoiceitem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtinvoiceitem: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nrpedido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nrordemcompra: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpesobrutounitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    anexo7: {
      type: DataTypes.STRING,
      allowNull: true
    },
    convenio52: {
      type: DataTypes.STRING,
      allowNull: true
    },
    extarifario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlqtdmedidaestatisticaitem: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'pedidoimportacaoitem'
  });
};
