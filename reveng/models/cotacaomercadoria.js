/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cotacaomercadoria', {
    idcotacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'cotacao',
        key: 'idcotacao'
      }
    },
    idcotacaomercadoria: {
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
    descricaomercadoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idncm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ncm',
        key: 'idncm'
      }
    },
    qtdemercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmleunitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlmle: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidokg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobrutokg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    qtdvolumes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idembalagem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'especiesvolumes',
        key: 'idespeciesvolumes'
      }
    },
    nratoconcessorio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idunidademedidacomercial: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'unidademedida',
        key: 'idunidademedida'
      }
    },
    snnecessitali: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idfornecedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    vlcomprimentomercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vllarguramercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlalturamercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcubagemmercadoria: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpestufagem: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlpercvrd: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfobdeclarado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrdesconto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercpis: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlperccofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercicms: {
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
    vlnfsaida: {
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
    vlfrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcif: {
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
    vlbasecalculoicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasecalculopiscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcustoproduto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlprodutosaida: {
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
    vldifpissaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldifcofinssaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cdregimetribicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdregimetribii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdregimetribipi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpusofinal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cdregimetribpiscofins: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vltaxasiscomex: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliiarecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipiarecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpacordoii: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlacordoii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercacordoii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercreducaoii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercreducaoipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercreducaoicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercreducaodealiquotaicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlperclucro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfretereais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguroreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tpreducaoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlicmsarecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlproduto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfobdeclaradoreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfobdeclaradodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    percmargemlucro: {
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
    vlbasecalculonfs: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldespesas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasecalculoipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoedamercadoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    vlrdespesabasenfs: {
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
    tpbasecalculoantidumping: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlipiespecificocaprecipiente: {
      type: DataTypes.DOUBLE,
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
    idipiespecificorecepiente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recipiente',
        key: 'idrecipiente'
      }
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
    vlmva: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasesubstituicaoicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercsubstituicaoicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsubstituicaoicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpercreducaobaseicmssaida: {
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
    vlaliqicmspiscofins: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'cotacaomercadoria'
  });
};
