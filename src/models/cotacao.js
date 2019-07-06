/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cotacao', {
    idcotacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idtabelasda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tabelasda',
        key: 'idtabelasda'
      }
    },
    idunidadenegocio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idresponsavel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    idunidadeoperacional: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    tpstatuscotacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    maxforcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nrcotacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtaberturacotacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtmoedacotacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtcalculocotacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtcalculocusto: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtvalidadecotacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tpembarquerealizado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idcliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'idpessoa'
      }
    },
    idproduto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'produto',
        key: 'idproduto'
      }
    },
    idservico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'servico',
        key: 'idservico'
      }
    },
    idviatransporte: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'viatransporte',
        key: 'idviatransporte'
      }
    },
    idincoterms: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'incoterm',
        key: 'idincoterm'
      }
    },
    idmoedafrete: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    vlfrete: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idmoedaseguro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moeda',
        key: 'idmoeda'
      }
    },
    vlseguro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mmobservacaocotacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tipoimportacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tipodesconto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    aliquotadesconto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrdesconto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dtmoedacalculocusto: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlrfretemoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfretereais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlseguronamoeda: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrseguroreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesoliquidokg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltaxasiscomex: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcifreais: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlii: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vliiarecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlipiarecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlfobdeclaradoreais: {
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
    vlicmsarecolher: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasecalculonfs: {
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
    vlrcustoproduto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrproduto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrtotalcustoimportacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrdifipisaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrdificmssaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idtermcarga: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'terminalcarga',
        key: 'idterminalcarga'
      }
    },
    idtermcargaorigem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'terminalcarga',
        key: 'idterminalcarga'
      }
    },
    idlocalentregamercadoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cidade',
        key: 'idcidade'
      }
    },
    vltotaldespesadestino: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    referenciacliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    referenciatrade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    grupocotacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idtermopagamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'termopagamento',
        key: 'idtermopagamento'
      }
    },
    tpcoberturacambial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dtaprovacao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vlrfretedolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrsegurodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrfobdeclaradodolar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    przconclusor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ideventoconclusor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vlrtotaldespesabasenfs: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idcomissao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'comissao',
        key: 'idcomissao'
      }
    },
    tpcalculoseguro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlrporcentagemseguro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlrtaxamle: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snfreteembutido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    snseguroembutido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlrantidumping: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    snsiscomexnoicms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vlacrescimo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vldeducao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpissaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlcofinssaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlsubsttribsaida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlpesobrutokg: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlbasecalculoicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalirrf: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vltotalcsll: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliartotal01: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliartotal02: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliartotal03: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliartotal04: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliartotal05: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliartotal06: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliartotal07: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliartotal08: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliartotal09: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vlauxiliartotal10: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    tableName: 'cotacao'
  });
};
